import { useState } from 'react'
import './App.scss'
import Balloon from './Components/Balloon'

function App () {
  const [balloonsRequirement, setBalloonsRequirement] = useState([
    {
      shape: 'square',
      color: 'peru',
      size: 'small'
    },
    {
      shape: 'redondo',
      color: 'red',
      size: 'big'
    },
    {
      shape: 'square',
      color: 'purple',
      size: 'big'
    },
    {
      shape: 'long',
      color: 'slategray',
      size: 'normal'
    }
  ])
  return (
    <div className='App'>
      <div className='d-flex'>
        {balloonsRequirement.map((balloon, index) => {
          const { shape, color, size } = balloon
          return <Balloon key={index} shape={shape} color={color} size={size} />
        })}
      </div>
    </div>
  )
}

export default App
