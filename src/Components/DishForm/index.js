const DishForm = props => {
  const { handlers } = props
  return (
    <form action='' className='border rounded shadow p-3'>
      <div className='form-group mb-3'>
        <label htmlFor=''>Imagen:</label>
        <input
          type='text'
          className='form-control'
          name='picture'
          onChange={handlers.dishFormHandler}
        />
      </div>
      <div className='form-group mb-3'>
        <label htmlFor=''>Nombre del platillo:</label>
        <input
          type='text'
          className='form-control'
          name='name'
          onChange={handlers.dishFormHandler}
        />
      </div>
      <div className='form-group mb-3'>
        <label htmlFor=''>Región</label>
        <input
          type='text'
          className='form-control'
          name='region'
          onChange={handlers.dishFormHandler}
        />
      </div>
      <div className='form-group mb-3'>
        <label htmlFor=''>Tipo</label>
        <select
          class='form-select'
          aria-label='Selecciona una opción'
          name='type'
          onChange={handlers.dishFormHandler}
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
          handlers.saveDish()
        }}
      >
        Guardar platillo
      </button>
    </form>
  )
}

export default DishForm
