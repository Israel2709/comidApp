const DishCard = props => {
  const { editHandler } = props
  const { name, region, type, picture, dishId } = props.dishData
  return (
    <div className='col-12 col-md-6 mb-3'>
      <div className='card border rounded dish-card shadow'>
        <img src={picture} alt='' />
        <div className='card-body'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Nombre: {name}</li>
            <li className='list-group-item'>Región: {region}</li>
            <li className='list-group-item'>Tipo: {type}</li>
          </ul>
          <button
            className='btn btn-dark mt-3'
            onClick={editHandler}
            data-dish-id={dishId}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  )
}

export default DishCard
