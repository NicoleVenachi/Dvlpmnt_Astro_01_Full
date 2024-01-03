import React, { useState } from 'react'

const SuscribeButton = () => {

  const [suscribe, setSuscribe] = useState(false)

  return (
    <button onClick={() => setSuscribe(prev => !prev)}>
      {
        suscribe ? 'Suscribed' : 'Click to suscribe'
      }

    </button>
  )
}

export default SuscribeButton
