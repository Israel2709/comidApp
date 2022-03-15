const Balloon = props => {
  const { shape, color, size, deleteHandler, balloonKey } = props
  const shapeConfig = {
    square: 'square',
    redondo: 'redondo',
    long: 'long'
  }

  const sizeConfig = {
    big: 'big',
    small: 'small',
    normal: ''
  }
  return (
    <div className='d-flex flex-column p-3 w-25 border align-items-center'>
      <div
        className={`balloon mb-3 ${shapeConfig[shape]} ${sizeConfig[size]}`}
        style={{
          backgroundColor: color
        }}
      ></div>
      <button
        data-balloon-index={balloonKey}
        type='button'
        className='btn btn-danger mt-auto'
        onClick={deleteHandler}
      >
        Borrar
      </button>
    </div>
  )
}

export default Balloon
