import './SimilarArtists.css'

function SimilarArtists({artistsdata}){
  const similarArtistsList = [...artistsdata.slice(1)]

  return(
    <div className='mt-3 similarArtistsComponent'>
      <h2>Artistas similares</h2>
      <div className='d-flex rounded-3 p-3 overflow-x-auto lista-artistas-similares'>
        {similarArtistsList.map((artist) => {
          return(
            <div className='d-flex flex-column me-1 rounded-3 artist-card'>
              <div className='d-flex flex-column '>
                <img src={artist["picture_medium"]} className='rounded-top-3' alt={`${artist["name"]} logo`} />
              </div>
              <div className='d-flex w-full p-1 justify-content-between'>
                <p className='artistCardInfo'>{artist["name"]}</p>
                <p className='artistCardInfo'>{`Fans: ${artist["nb_fan"]}`}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SimilarArtists