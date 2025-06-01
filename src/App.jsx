import './App.css'
import CardList from './Components/CardList'
import ArtistPage from './ArtistPageComponent/ArtistPage.jsx'

function App() {

  return (
    <>
      {/* <CardList listTitle={"Top Artist"}/> */}
      <div className='d-flex justify-content-center align-items-center container-fluid min-vh-100'>
        <ArtistPage /> 
      </div>
    </>
  )
}

export default App
