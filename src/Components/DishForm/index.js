const DishForm = props => {
  const { handlers, title, editedDishData, dishData } = props
  return (
    <form action='' className='border rounded shadow p-3'>
      <h2>{title}</h2>
      <div className='form-group mb-3'>
        <label htmlFor=''>Imagen:</label>
        <input
          type='text'
          className='form-control'
          name='picture'
          onChange={
            editedDishData ? handlers.editDishHandler : handlers.dishFormHandler
          }
          value={editedDishData ? editedDishData.picture : dishData.picture}
        />
      </div>
      <div className='form-group mb-3'>
        <label htmlFor=''>Nombre del platillo:</label>
        <input
          type='text'
          className='form-control'
          name='name'
          onChange={
            editedDishData ? handlers.editDishHandler : handlers.dishFormHandler
          }
          value={editedDishData ? editedDishData.name : dishData.name}
        />
      </div>
      <div className='form-group mb-3'>
        <label htmlFor=''>Región</label>
        <input
          type='text'
          className='form-control'
          name='region'
          onChange={
            editedDishData ? handlers.editDishHandler : handlers.dishFormHandler
          }
          value={editedDishData ? editedDishData.region : dishData.region}
        />
      </div>
      <div className='form-group mb-3'>
        <label htmlFor=''>Tipo</label>
        <select
          class='form-select'
          aria-label='Selecciona una opción'
          name='type'
          onChange={
            editedDishData ? handlers.editDishHandler : handlers.dishFormHandler
          }
          value={editedDishData ? editedDishData.type : dishData.type}
        >
          <option value='entrada'>Entrada</option>
          <option value='plato fuerte'>Plato fuerte</option>
          <option value='postre'>Postre</option>
          <option value='versatil'>Versátil</option>
        </select>
      </div>
      <button
        type='button'
        className='btn btn-dark'
        onClick={() => {
          handlers.saveButtonHandler()
        }}
      >
        Guardar platillo
      </button>
    </form>
  )
}

export default DishForm
