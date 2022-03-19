import { useEffect, useState } from 'react'
import api from '../../lib/api'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  const typeOptions = [
    {
      label: 'Desayuno',
      value: 'breakfast'
    },
    {
      label: 'Comida',
      value: 'meal'
    },
    {
      label: 'Cena',
      value: 'dinner'
    }
  ]
  const [newDish, setNewDish] = useState({})

  const formHandler = event => {
    const value = event.target.value
    const property = event.target.name
    setNewDish({ ...newDish, [property]: value })
  }

  const saveHandler = async () => {
    const result = await api.saveDish(newDish)
    navigate('/catalog')
    console.log(result)
  }

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    !token && navigate('/login')
  })
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6 offset-md-3'>
          <form action='' className='bg-dark text-white p-3 border rounded'>
            <div className='form-group mb-3'>
              <label htmlFor=''>Nombre</label>
              <input
                type='text'
                className='form-control'
                name='name'
                onChange={formHandler}
              />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor=''>Region</label>
              <input
                type='text'
                className='form-control'
                name='region'
                onChange={formHandler}
              />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor=''>Imagen</label>
              <input
                type='text'
                className='form-control'
                name='picture'
                onChange={formHandler}
              />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor=''>Tipo</label>
              <select
                className='form-select'
                aria-label='Default select example'
                onChange={formHandler}
                name='type'
              >
                {typeOptions.map(option => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <button
              type='button'
              className='btn btn-dark'
              onClick={saveHandler}
            >
              Guardar Platillo
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
