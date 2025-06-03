import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FollowedWidget.css'

function FollowedWidget(){

  return(
    <div className='rounded-3 me-3 followed-widget'>
      <div className='d-flex justify-content-center align-items-center rounded-circle circle-info'>
          <p>0</p>
      </div>
      <div className="dropdown">
        <button className="btn dropdown-toggle btnDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon="fa-heart"/>
        </button>
        <ul className="dropdown-menu dropdownContainer">
          <li>Artista 1</li>
          <li>Artista 2</li>
          <li>Artista 3</li>
        </ul>
      </div>
    </div>
  )
}

export default FollowedWidget