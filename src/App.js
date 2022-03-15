import { useState, useEffect } from 'react'
import './App.scss'

function App () {
  const [dishes, setDishes] = useState({})
  const [reFetch, setReFetch] = useState(false)
  useEffect(() => {
    console.log('componente renderizado')
    let data = fetch(
      'https://react-crud-15g-default-rtdb.firebaseio.com/dishes.json'
    ).then(response => {
      response.json().then(json => {
        setDishes(json)
      })
    })
  }, [])
  return (
    <div className='App'>
      {Object.keys(dishes).map(dish => {
        const { name, region, type, picture } = dishes[dish]
        return (
          <div className='card border rounded dish-card'>
            <img src={picture} alt='' />
            <div className='card-body'>
              <h2>Nombre: {name}</h2>
              <h3>Región: {region}</h3>
              <h4>Tipo: {type}</h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
