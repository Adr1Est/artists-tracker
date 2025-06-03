import './App.css'
import CardList from './Components/CardList'
import ArtistPage from './ArtistPageComponent/ArtistPage.jsx'
import { Outlet } from 'react-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faHouse, faMusic } from '@fortawesome/free-solid-svg-icons'
import Header from './Components/Header.jsx'

library.add(faHouse, faMusic, faHeart)

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
