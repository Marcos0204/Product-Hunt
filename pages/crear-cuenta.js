import React from 'react';
import Layout from '../components/Layout/Layout';

const CreateAccount = () => {

  
  return (
    <>
      <Layout>
      <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Crear Cuenta</h1>
          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >
              <Campo>
                  <label htmlFor="nombre">Nombre</label>
                  <input 
                      type="text"
                      id="nombre"
                      placeholder="Tu Nombre"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>

              {errores.nombre && <Error>{errores.nombre}</Error> }
  
              <Campo>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email"
                      id="email"
                      placeholder="Tu Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>
              {errores.email && <Error>{errores.email}</Error> }
  
              <Campo>
                  <label htmlFor="password">Password</label>
                  <input 
                      type="password"
                      id="password"
                      placeholder="Tu Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>
              {errores.password && <Error>{errores.password}</Error> }

              {error && <Error>{error} </Error>}
  
              <InputSubmit 
                type="submit"
                value="Crear Cuenta"
              />
          </Formulario>
        </>
      </Layout>
    </>
  )
}

export default CreateAccount
