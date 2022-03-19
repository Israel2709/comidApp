import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const DishDetail = () => {
  const [selectedDish, setSelectedDish] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(async () => {
    let result = await fetch(
      `https://react-crud-15g-default-rtdb.firebaseio.com/dishes/${id}.json`
    )
    setSelectedDish(await result.json())
    /*setTimeout(() => {
      navigate('/login')
    }, 3000)*/
  }, [])
  console.log(id)
  return <h1>detalle:{selectedDish.name}</h1>
}

export default DishDetail
