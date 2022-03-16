import { useState, useEffect } from 'react'
import api from './lib/api'
import DishCard from './Components/DishCard'
import './App.scss'
import DishForm from './Components/DishForm'

function App () {
  /*Colección completa de platillos*/
  const [dishes, setDishes] = useState({})
  /*Nuevo platillo a guardar en la base de datos*/
  const [dishData, setDishData] = useState({})
  /*Platillo que estamos editando*/
  const [isEditing, setIsEditing] = useState(false)
  /*Bandera de si el usuario esta loggeado*/
  const [isLogged, setIsLogged] = useState(true)
  /*Bandera de si estamos editando un platillo*/
  const [editedDish, setEditedDish] = useState({})

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

  const editDishHandler = event => {
    let value = event.target.value
    let property = event.target.name
    setEditedDish({ ...editedDish, [property]: value })
  }

  const saveDish = async () => {
    console.log('salvando nuevo')
    let saveResponse = await api.saveDish(dishData)
    let data = await api.getAllDishes()
    setDishes(data)
  }

  const logIn = () => {
    alert('Sesión iniciada con éxito')
    setIsLogged(!isLogged)
  }

  const logOut = () => {
    alert('Cerrando sesión')
    setIsLogged(!isLogged)
  }

  const editDish = event => {
    let dishId = event.target.dataset.dishId
    console.log('editar platillo')
    setEditedDish({ ...dishes[dishId], dishId })
    setIsEditing(true)
    console.log(dishId)
  }

  const saveEditedDish = async () => {
    console.log('salvando editado')
    console.log(editedDish)
    let response = await api.saveEditedDish(editedDish.dishId, editedDish)
    console.log(response)
  }
  return (
    <div className='App'>
      <button className='btn btn-primary' onClick={isLogged ? logOut : logIn}>
        {isLogged ? 'Log Out' : 'Log In'}
      </button>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='row py-3'>
              {Object.keys(dishes).map(dish => {
                return (
                  <DishCard
                    key={dish}
                    dishData={{ ...dishes[dish], dishId: dish }}
                    editHandler={editDish}
                  />
                )
              })}
            </div>
          </div>
          <div className='col-12 col-md-6'>
            {!isEditing && isLogged && (
              <DishForm
                handlers={{ saveButtonHandler: saveDish, dishFormHandler }}
                title='Guardar nuevo platillo'
                dishData={dishData}
              />
            )}
            {isEditing && (
              <DishForm
                handlers={{
                  saveButtonHandler: saveEditedDish,
                  editDishHandler
                }}
                title='Editar platillo'
                editedDishData={editedDish}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
