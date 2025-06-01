import './SimilarArtists.css'

function SimilarArtists({artistsdata, singleArtist}){
  const similarArtistsList = [...artistsdata.filter((artist) => artist["name"] !== `${singleArtist}`)]

  return(
    <div className='mt-3 similarArtistsComponent'>
      <h2>Artistas similares</h2>
      <div className='d-flex border border-dark border-3 rounded p-3 overflow-x-auto lista-artistas-similares'>
        {similarArtistsList.map((artist) => {
          return(
            <div className='d-flex flex-column border border-dark rounded me-1 artist-card'>
              <div className='d-flex flex-column '>
                <img src={artist["picture_medium"]} alt={`${artist["name"]} logo`} />
              </div>
              <div className='d-flex w-full justify-content-between'>
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