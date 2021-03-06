import React, { useState } from "react";
import { useRouter } from 'next/router';
import { css } from '@emotion/core';
import Layout from '../components/Layout/Layout';
import { Form, Field, InputSubmit,  Error } from '../components/ui/Form/Form';

import Firebase from '../Firebase/firebase';

// validaciones
import useValidation from '../hooks/useValidation';
import ValidateLogin from '../validation/ValidateLogin';


const initialState = {
  email: '',
  password: ''
}

const Login = () => {

  const [ error, setError] = useState(false);

    const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(initialState, ValidateLogin, NewLogin);

    const {  email, password } = values;
    const router = useRouter()

    async function NewLogin() {
        try {
          const authUser= await Firebase.login(email, password)
          router.push('/')
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
          >Crear Cuenta</h1>
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
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

              {error && <Error>Oops!... Hubo un error al autentificar el usuario</Error>}
  
              <InputSubmit 
                type="submit"
                value="Iniciar Sesion"
              />
          </Form>
        </>
      </Layout>
    </>
  )
}

export default Login
