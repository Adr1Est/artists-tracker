import './App.css'
import CardList from './Components/CardList'
import ArtistPage from './ArtistPageComponent/ArtistPage.jsx'
import { Outlet } from 'react-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse, )

function App() {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
