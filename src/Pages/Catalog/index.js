import { useState, useEffect } from 'react'
import api from '../../lib/api'
import DishCard from '../../Components/DishCard'

const Catalog = () => {
  /*Colección completa de platillos*/
  const [dishes, setDishes] = useState({})
  useEffect(async () => {
    let data = await api.getAllDishes()
    setDishes(data)
    console.log(data)
  }, [])
  return (
    <div className='container'>
      <div className='row'>
        {Object.keys(dishes).map(key => {
          return (
            <DishCard
              key={key}
              dishData={{ ...dishes[key], dishId: key }}
              editHandler={null}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Catalog
