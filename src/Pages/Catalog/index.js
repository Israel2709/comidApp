import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
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
        {dishes &&
          Object.keys(dishes).map(key => {
            return (
              <DishCard
                key={key}
                dishData={{ ...dishes[key], dishId: key }}
                editHandler={null}
              />
            )
          })}
        {!dishes && (
          <div className='alert alert-warning' role='alert'>
            Los koders borraron todos los platillos, prueba a crear uno nuevo en
            <Link to='/create'> nuestra app!</Link>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  )
}

export default Catalog
