import React, { useState } from "react";
import { useRouter } from 'next/router';
import { css } from '@emotion/core';
import Layout from '../components/Layout/Layout';
import { Form, Field, InputSubmit,  Error } from '../components/ui/Form/Form';

import Firebase from '../Firebase/firebase';

// validaciones
import useValidation from '../hooks/useValidation';
import validationCreateAcount from '../validation/ValidateCreateAcount'


const initialState = {
  name: '',
  email: '',
  password: ''
}


const NewProduct = () =>  {

  const [ error, setError] = useState(false);

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(initialState, validationCreateAcount, crearCuenta);

  const { name, email, password } = values;
  const router = useRouter()

  async function crearCuenta() {
      try {
        const res = await Firebase.register(name, email, password);
        router.push('/login');
      } catch (error) {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000);
        
      }
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
          >Nuevo Producto</h1>
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

  
              <InputSubmit 
                type="submit"
                value="Crear Cuenta"
              />
          </Form>
        </>
      </Layout>
    </>
  )
};

export default NewProduct
