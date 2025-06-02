import './App.css'
import CardList from './Components/CardList'
import ArtistPage from './ArtistPageComponent/ArtistPage.jsx'
import { Outlet } from 'react-router'


function App() {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
