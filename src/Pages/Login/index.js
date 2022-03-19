const Login = props => {
  const { loginHandler } = props
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6 offset-md-3'>
          <form action='' className='bg-dark text-white p-3 border rounded'>
            <div className='form-group mb-3'>
              <label htmlFor=''>Usuario</label>
              <input type='text' className='form-control' />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor=''>Contraseña</label>
              <input
                type='password'
                className='
                form-control'
              />
            </div>
            <button
              type='button'
              className='btn btn-dark'
              onClick={loginHandler}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
