import './FullScreenLoader.css'
import { Waveform } from 'ldrs/react'
import 'ldrs/react/Waveform.css'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function FullScreenLoader(){
  const navigate = useNavigate()

  return (
    <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
      <Waveform
        size="100"
        stroke="4"
        speed="1"
        color="purple" 
      />
      <button className='rounded-3 mt-3 loaderBtn' onClick={() => navigate('/')}>
        <FontAwesomeIcon icon="fa-house" />
      </button>
    </div>
  )
}

export default FullScreenLoader