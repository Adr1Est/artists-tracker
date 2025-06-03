import { useEffect, useState } from 'react'
import './TrackList.css'
import { Waveform } from 'ldrs/react'
import Track from './Track'

function TrackList ({artistsdata}) {
  const artist = artistsdata[0]
  const [trackList, setTrackList] = useState([])


  useEffect(()=>{
    const getTrackList = async () => {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/${artist["tracklist"]}`, {
        method:'GET'
      })
      const data = await response.json()
      setTrackList(await data.data)
    }

    getTrackList()
  }, [])

  return(
    <div className='d-flex flex-column mt-3 mb-1 trackListComponent'>
      <h2>Canciones</h2>
      <div className='d-flex flex-column align-items-center rounded-3 p-1 h-100 overflow-y-auto lista-canciones'>
        
          {
            (!trackList || trackList.length === 0) ? ( 
              <div className='d-flex justify-content-between w-75 track'>
                <Waveform /> 
              </div>
            ) : ( trackList.map((track) => (
              <Track 
                trackTitle={track["title"]}
                linkToSong={track["link"]}
                albumCover={track["album"]["cover_small"]}
                trackAlbum={track["album"]["title"]}
                trackDuration={track["duration"]}
              />
            ))
          )} 

      </div>
    </div>
  )
}

export default TrackList