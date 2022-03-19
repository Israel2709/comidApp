import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import api from '../../lib/api'
import DishCard from '../../Components/DishCard'

const Catalog = () => {
  /*Colección completa de platillos*/
  const [dishes, setDishes] = useState({})
  const [filteredDishes, setFilteredDishes] = useState(null)
  const [textToSearch, setTextToSearch] = useState('')
  const [regionsList, setRegionsList] = useState([])
  useEffect(async () => {
    let data = await api.getAllDishes()
    setDishes(data)
    const regionsArray = Object.keys(data).reduce((accum, key) => {
      let dishObject = data[key]
      let region = dishObject.region
      return accum.includes(region) ? accum : [...accum, region]
    }, [])

    console.log(regionsArray)
    setRegionsList(regionsArray)
  }, [])

  const searchInputHandler = event => {
    //Aqui obtenemos lo que esta escrito en el input y lo guardamos en value
    const value = event.target.value
    //aquí filtramos usando como criterio lo que esta escrito en el campo
    const filterResult = Object.keys(dishes).filter(key => {
      const dishValue = dishes[key]
      const dishName = dishValue.name
      return dishName.toLowerCase().includes(value.toLowerCase())
    })
    //aquí seteamos en un estado el resultado de nuestro filtrado
    !value ? setFilteredDishes(null) : setFilteredDishes(filterResult)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <form
            action=''
            className='p-3 bg-dark text-white border rounded shadow mb-3'
          >
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Buscar por nombre'
                onChange={searchInputHandler}
              />
            </div>
          </form>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <form
            action=''
            className='p-3 bg-dark text-white border rounded shadow mb-3'
          >
            <div className='form-group'>
              <label htmlFor=''>Filtrar por región</label>
              <select
                className='form-select'
                aria-label='Default select example'
              >
                {regionsList.map(region => (
                  <option value={region}>{region}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className='row'>
        {filteredDishes &&
          filteredDishes.map(key => {
            return (
              <DishCard
                key={key}
                dishData={{ ...dishes[key], dishId: key }}
                editHandler={null}
              />
            )
          })}
        {dishes &&
          !filteredDishes &&
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
