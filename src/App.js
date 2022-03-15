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
        const { name, region, type } = dishes[dish]
        return (
          <div className='card p-3 border rounded'>
            <h2>{name}</h2>
            <h3>{region}</h3>
            <h4>{type}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default App
