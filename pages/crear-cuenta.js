import React, { useState } from 'react';
import { css } from '@emotion/core';
import Layout from '../components/Layout/Layout';
import { Form, Field, InputSubmit,  Error } from '../components/ui/Form/Form';


// validaciones
import useValidation from '../hooks/useValidation';
import validationCreateAcount from '../validation/ValidateCreateAcount'


const initialState = {
  name: '',
  email: '',
  password: ''
}

const CreateAccount = () => {

  const [ error, guardarError] = useState(false);

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(initialState, validationCreateAcount, crearCuenta);

  const { name, email, password } = values;


  async function crearCuenta() {
    // try {
    //   await firebase.registrar(nombre, email, password);
    //   Router.push('/');
    // } catch (error) {
    //   console.error('Hubo un error al crear el usuario ', error.message);
    //   guardarError(error.message);
    // }
      console.log('funciono todo perfecto')
  }


  
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
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
              <Field>
                  <label htmlFor="nombre">Nombre</label>
                  <input 
                      type="text"
                      id="name"
                      placeholder="Tu Nombre"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Field>

              {errors.name && <Error>{errors.name}</Error> }
  
              <Field>
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
              </Field>
              {errors.email && <Error>{errors.email}</Error> }
  
              <Field>
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
              </Field>
              {errors.password && <Error>{errors.password}</Error> }

              {error && <Error>{error} </Error>}
  
              <InputSubmit 
                type="submit"
                value="Crear Cuenta"
              />
          </Form>
        </>
      </Layout>
    </>
  )
}

export default CreateAccount
