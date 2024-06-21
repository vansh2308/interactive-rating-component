
import './App.css'

import Rating from './components/Rating.jsx'
import Thanks from './components/Thanks.jsx'
import { useSelector } from 'react-redux'


function App() {
  const thanksDisplay = useSelector(state => state.thanksDisplay.value)
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
      { !thanksDisplay && <Rating />}
      { thanksDisplay &&  <Thanks />}
    </div>
  )
}

export default App


