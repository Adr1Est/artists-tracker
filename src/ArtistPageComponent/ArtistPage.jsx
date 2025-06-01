import './ArtistPage.css'
import { getArtist } from '../../funciones-api/funciones-api'
import { useEffect, useState } from 'react'
import SimilarArtists from './SimilarArtists'
import FullScreenLoader from '../FullScreenLoader/FullScreenLoader.jsx'

function ArtistPage(){
  const [artistsData, setArtistsData] = useState({})

  useEffect(()=>{
    const getBandFromAPI = async () => {
      const groupsData = await getArtist()
      setArtistsData(groupsData)
    }
    getBandFromAPI()
  }, [])

  useEffect(()=>{
    console.log(artistsData);
  }, [artistsData])

  if (!artistsData.data || artistsData.data.length === 0) {
    return ( <FullScreenLoader /> )
  }

  return(
    <>
      <div className='d-flex flex-column w-100'>
        <div className='d-flex flex-row align-items-center'>
          <img 
            src={artistsData["data"][0]["picture_medium"]} 
            id="artist-img" 
            alt={`${artistsData["data"][0]["name"]} logo`}
           />
          <h1>{artistsData["data"][0]["name"]}</h1>
        </div>

        <SimilarArtists /> 
      </div>
    </>
  )
}

export default ArtistPage