const Balloon = props => {
  const { shape, color, size } = props
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
    <div
      className={`balloon ${shapeConfig[shape]} ${sizeConfig[size]}`}
      style={{
        backgroundColor: color
      }}
    ></div>
  )
}

export default Balloon
