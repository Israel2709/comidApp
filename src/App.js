import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import api from './lib/api'
import './App.scss'
import DishForm from './Components/DishForm'
import Catalog from './Pages/Catalog'
import Create from './Pages/Create'
import DishDetail from './Pages/DishDetail'
import Login from './Pages/Login'

function App () {
  /*Nuevo platillo a guardar en la base de datos*/
  const [dishData, setDishData] = useState({})
  /*Platillo que estamos editando*/
  const [isEditing, setIsEditing] = useState(false)
  /*Bandera de si el usuario esta loggeado*/
  const [isLogged, setIsLogged] = useState(true)
  /*Bandera de si estamos editando un platillo*/
  const [editedDish, setEditedDish] = useState({})

  const navigate = useNavigate()
  /*
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
  */
  const logIn = () => {
    alert('Sesión iniciada con éxito, redireccionando!')
    setIsLogged(!isLogged)
    localStorage.setItem('userToken', '1234asdf')
    setTimeout(function () {
      navigate('/catalog')
    }, 2000)
  }
  /*
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
  }*/
  return (
    <div className='App'>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Catálogo
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/create' className='nav-link'>
                  Crear Platillo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='pt-5'>
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/login' element={<Login loginHandler={logIn} />} />
          <Route path='/create' element={<Create />} />
          <Route path='/dish-detail/:id' element={<DishDetail />} />
        </Routes>
      </div>
      <footer>Mi footer</footer>
    </div>
  )
}

export default App
