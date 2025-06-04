import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FollowedWidget.css'
import useGlobalReducer from '../hooks/useGlobalReducer.jsx'

function FollowedWidget(){
  const { store, dispatch } = useGlobalReducer()
  const handleUnfollow = (artist) => {
    dispatch( { type: "REMOVE_FAVOURITE", payload: artist } )
  }

  return(
    <div className='rounded-3 me-3 followed-widget'>
      <div className='d-flex justify-content-center align-items-center rounded-circle circle-info'>
          <p>{store.favourites.length}</p>
      </div>
      <div className="btn-group">
        <button className="btn dropdown-toggle btnDropdown" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          <FontAwesomeIcon icon="fa-heart"/>
        </button>
        <ul className="dropdown-menu p-2 dropdownContainer">
          {
            store.favourites.map((artist) => (
              <li key={artist.id} className='d-flex align-items-center rounded-3 p-1 mb-1 justify-content-between artist-list-element'>
                <p className='m-0 ms-1'>{artist.name}</p>
                <button className='btnUnfollow' onClick={() => handleUnfollow(artist)}>
                  <FontAwesomeIcon className='me-1' icon="fa-heart-crack"/>
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default FollowedWidget