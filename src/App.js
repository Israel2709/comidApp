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
  const [balloonObject, setBalloonObject] = useState({})
  const [cardNumber, setCardNumber] = useState('')

  const balloonInputHandler = event => {
    let property = event.target.name
    let value = event.target.value
    setBalloonObject({ ...balloonObject, [property]: value })
  }

  const addBalloon = () => {
    setBalloonsRequirement([...balloonsRequirement, balloonObject])
  }

  const getCardNumber = event => {
    setCardNumber(event.target.value)
  }
  return (
    <div className='App'>
      <img src='https://picsum.photos/200/300' alt='' />
      <input type='text' name='cardNumber' onChange={getCardNumber} />
      <div className='border p-3 bg-dark text-white'>
        <h1>Número de tarjeta: {cardNumber}</h1>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <div className='d-flex'>
              {balloonsRequirement.map((balloon, index) => {
                const { shape, color, size } = balloon
                return (
                  <Balloon
                    key={index}
                    shape={shape}
                    color={color}
                    size={size}
                  />
                )
              })}
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <form action='' className='bg-dark text-white border rounded p-3'>
              <div className='form-group mb-3'>
                <label htmlFor=''>Tamaño</label>
                <select
                  name='size'
                  id=''
                  className='form-select'
                  aria-label='Default select example'
                  onChange={balloonInputHandler}
                >
                  <option value='small'>Pequeño</option>
                  <option value='normal'>Normal</option>
                  <option value='big'>Grande</option>
                </select>
              </div>
              <div className='form-group mb-3'>
                <label htmlFor=''>Color</label>
                <input
                  type='color'
                  name='color'
                  className='form-control'
                  onChange={balloonInputHandler}
                />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor=''>Forma</label>
                <select
                  name='shape'
                  id=''
                  className='form-select'
                  aria-label='Default select example'
                  onChange={balloonInputHandler}
                >
                  <option value='square'>Cuadrado</option>
                  <option value='redondo'>Redondo</option>
                  <option value='long'>Largo</option>
                </select>
              </div>
              <button
                type='button'
                className='btn btn-outline-light'
                onClick={addBalloon}
              >
                Agregar Globo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
