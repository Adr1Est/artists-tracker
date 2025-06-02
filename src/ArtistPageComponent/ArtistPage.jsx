import './ArtistPage.css'
import { useEffect, useState } from 'react'
import SimilarArtists from './SimilarArtists'
import FullScreenLoader from '../FullScreenLoader/FullScreenLoader.jsx'
import TrackList from './TrackList.jsx'
import { fetchDeezerArtist } from '../infoApi.jsx'
import ArtistHeader from './ArtistHeader.jsx'
import { useParams } from 'react-router'

function ArtistPage(){
  const [artistsData, setArtistsData] = useState([])
  const {name} = useParams()

  useEffect(()=>{
    const getArtistFromAPI = async () => {
      const dataFromAPI = await fetchDeezerArtist(name)
      setArtistsData(dataFromAPI)
    }
    getArtistFromAPI()
  }, [])

  if (!artistsData || artistsData.length === 0) {
    return ( <FullScreenLoader /> )
  }

  return(
    <>
      <div className='d-flex flex-column justify-content-center w-50'>
        <ArtistHeader artistsdata={artistsData} singleArtist={name}/>
        <TrackList artistsdata={artistsData}/> 
        <SimilarArtists artistsdata={artistsData}/> 
      </div>
    </>
  )
}

export default ArtistPage