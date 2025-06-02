import './Track.css'

function Track({linkToSong, albumCover, trackTitle, trackAlbum, trackDuration}){
  return(
    <div className='d-flex justify-content-between w-75 mt-1 rounded-3 track'>
      <a href={linkToSong} target='_blank' rel="noreferrer">
        <img src={albumCover} className='rounded-start-3' alt="" />
      </a>
      <div className='d-flex flex-column'>
        <p className='trackInfo'>{trackTitle}</p>
        <p className='trackInfo'>{trackAlbum}</p>
      </div>
      <p className='trackInfo me-1'>{`Duración: ${(trackDuration/60).toFixed(2)} min`}</p>
    </div>
  )
}

export default Track
