import './App.css'
import CardList from './Components/CardList'
import ArtistPage from './ArtistPageComponent/ArtistPage.jsx'
import { strategyTopArtist, strategyGenreTopArtist } from './strategies.jsx'

function App() {

  return (
    <>
      {<CardList title="Top Artist" strategy={strategyTopArtist}/> }
      {<CardList title="Top Rock" tag="rock" strategy={strategyGenreTopArtist}/> }
      {<CardList title="Top Country" tag="country" strategy={strategyGenreTopArtist}/> }
      {<CardList title="Top Pop" tag="pop" strategy={strategyGenreTopArtist}/> }
      {<CardList title="Top Indie" tag="indie" strategy={strategyGenreTopArtist}/> }
      {<CardList title="Top Rap" tag="rap" strategy={strategyGenreTopArtist}/> }
      {/*<div className='d-flex justify-content-center align-items-center container-fluid'>
        <ArtistPage /> 
      </div>*/}
    </>
  )
}

export default App
