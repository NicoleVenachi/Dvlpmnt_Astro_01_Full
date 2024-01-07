import React, { useState } from 'react'


// usar cmopente externo
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SuscribeButton = () => {

  const [suscribe, setSuscribe] = useState(false)

  return (
    <>
      <button className='bg-blue-400 rounded-md' onClick={() => {
        toast.success('Great! You have successfully signed up')
        setSuscribe(prev => !prev)
      }
      }>
        {
          suscribe ? 'Suscribed' : 'Click to suscribe'
        }

      </button>

      <ToastContainer />

    </>
  )
}

export default SuscribeButton
