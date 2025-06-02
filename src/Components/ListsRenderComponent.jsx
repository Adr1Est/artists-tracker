import CardList from "./CardList"
import { strategyTopArtist, strategyGenreTopArtist } from '../strategies.jsx'

function ListsRenderComponent(){

  return (
    <>
      {<CardList title="Top Artist" strategy={strategyTopArtist}/> }
      {<CardList title="Top Rock" tag="rock" strategy={strategyGenreTopArtist}/> }
      {<CardList title="Top Country" tag="country" strategy={strategyGenreTopArtist}/> }
      {<CardList title="Top Pop" tag="pop" strategy={strategyGenreTopArtist}/> }
      {<CardList title="Top Indie" tag="indie" strategy={strategyGenreTopArtist}/> }
      {<CardList title="Top Rap" tag="rap" strategy={strategyGenreTopArtist}/> }
    </>
  )
}

export default ListsRenderComponent