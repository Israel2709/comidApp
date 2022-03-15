const BASE_URL = 'https://react-crud-15g-default-rtdb.firebaseio.com'

export default {
  getAllDishes: async () => {
    let response = await fetch(`${BASE_URL}/dishes.json`)
    return await response.json()
  },
  saveDish: async dishData => {
    let response = await fetch(`${BASE_URL}/dishes.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dishData)
    })
    return await response.json()
  }
}
