const DynamicForm = props => {
  /*
    {
        fields:[
            {
                type:"",
                placeholder:"",
                label:
                inputHandler:,
                assginedState:,
                property:
            }
        ],
        title:"some title",
        
        saveHandler,
        
    }*/
  const { configuration } = props
  return (
    <form action='' className='border rounded shadow p-3'>
      <h2>{title}</h2>
      {configuration.fields.map(field => {
        return (
          <div className='form-group mb-3'>
            <label htmlFor=''>{field.label}</label>
            <input
              type={field.type}
              className='form-control'
              name={field.property}
              onChange={field.inputHandler}
              value={field.assignedState[field.property]}
            />
          </div>
        )
      })}

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

export default DynamicForm
