import { useState, useEffect } from 'react'
import api from './lib/api'
import DishCard from './Components/DishCard'
import './App.scss'
import DishForm from './Components/DishForm'

function App () {
  const [dishes, setDishes] = useState({})
  const [reFetch, setReFetch] = useState(false)
  const [dishData, setDishData] = useState({})

  useEffect(async () => {
    let data = await api.getAllDishes()
    setDishes(data)
    console.log(data)
  }, [])

  const dishFormHandler = event => {
    let value = event.target.value
    let property = event.target.name
    setDishData({ ...dishData, [property]: value })
  }

  const saveDish = async () => {
    let saveResponse = await api.saveDish(dishData)
    let data = await api.getAllDishes()
    setDishes(data)
  }
  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='row py-3'>
              {Object.keys(dishes).map(dish => {
                return <DishCard dishData={dishes[dish]} />
              })}
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <DishForm handlers={{ saveDish, dishFormHandler }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
