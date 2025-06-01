import { Waveform } from 'ldrs/react'
import 'ldrs/react/Waveform.css'

function FullScreenLoader(){
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <Waveform
        size="100"
        stroke="4"
        speed="1"
        color="purple" 
      />
    </div>
  )
}

export default FullScreenLoader