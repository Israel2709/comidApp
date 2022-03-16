import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DishDetail = () => {
  const [selectedDish, setSelectedDish] = useState({})
  const { id } = useParams()

  useEffect(async () => {
    let result = await fetch(
      `https://react-crud-15g-default-rtdb.firebaseio.com/dishes/${id}.json`
    )
    setSelectedDish(await result.json())
  }, [])
  console.log(id)
  return <h1>{selectedDish.name}</h1>
}

export default DishDetail
