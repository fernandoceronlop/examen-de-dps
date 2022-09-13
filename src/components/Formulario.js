
    const Formulario = () => {
        const { register, handleSubmit } = useForm() 
        const customSubmit = (data) => {
            console.log(data)
        }
        return (
          <>
              <h2>Form Basic</h2>
              <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
                  <div className='form-control'>
                      <label>Nombre</label>
                      <input type="text" {...register('nombre')} />
                  </div>
                  <div className='form-control'>
                      <label>Apellido</label>
                      <input type="text" {...register('apellido')} />
                  </div>
      
                  <div className='form-control'>
                      <label>Sexo</label>
                      <input type="text" {...register('sexo')} />
                  </div>
      
                  <div className='form-control'>
                      <label>DUI</label>
                      <input type="text" {...register('dui')} />
                  </div>
                 
                  <div className='form-control'>
                      <label>Fecha de nacimiento</label>
                      <input type="text" {...register('fecha')} />
                  </div>
      
                  <div className='form-control'>
                      <label>Nacionalidad</label>
                      <input type="text" {...register('nacionalidad')} />
                  </div>
                  <div className='form-control'>
                      <label>Direccion</label>
                      <input type="text" {...register('direccion')} />
                  </div>
      
                  <div className='form-control'>
                      <label>Municipio</label>
                      <input type="text" {...register('municipio')} />
                  </div>
                  <div className='form-control'>
                      <label>Departamento</label>
                      <input type="text" {...register('departamento')} />
                  </div>
      
                  <button type='submit'>Registrar</button>
                  <button type='submit'>Mostrar</button>
              </form>
          </>
        )
      }
      

export default Formulario