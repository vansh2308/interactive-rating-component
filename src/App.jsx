import { useState } from 'react'
import './App.css'

import Rating from './components/Rating.jsx'
import Thanks from './components/Thanks.jsx'


function App() {
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
      <Rating />
      {/* <Thanks /> */}
    </div>
  )
}

export default App


