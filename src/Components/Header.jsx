import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
import FollowedWidget from './FollowedWidget'

function Header(){
  return(
    <div className='d-flex justify-content-center'>
      <div className='d-flex align-items-center justify-content-between rounded-3 p-3 mt-1 header-container'>
        <div className='d-flex w-50 align-items-center fs-1'>
          <FontAwesomeIcon icon="fa-music"/>
          <h1 className='ms-3'>Artist Tracker</h1>
        </div>
        <div className='followed-container'>
          <FollowedWidget />
        </div>
      </div>
    </div>
  )
}

export default Header