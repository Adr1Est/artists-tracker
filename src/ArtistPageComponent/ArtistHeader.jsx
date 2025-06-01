import './ArtistHeader.css'

function ArtistHeader({artistsdata}){

  return(
    <div className='d-flex align-content-between align-items-end'>
      <img 
        src={artistsdata[0]["picture_big"]} 
        id="artist-img" 
        alt={`${artistsdata[0]["name"]} logo`}
      />
      <div className='d-flex flex-column ms-3'>
        <h1>{artistsdata[0]["name"]}</h1>
        <p className='fs-5'>{`Fans: ${artistsdata[0]["nb_fan"]}`}</p>
      </div>
    </div>
  )
}

export default ArtistHeader