import './App.css'
import { Outlet } from 'react-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faHeartCrack, faHouse, faMusic } from '@fortawesome/free-solid-svg-icons'
import Header from './Components/Header.jsx'

library.add(faHouse, faMusic, faHeart, faHeartCrack)

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
