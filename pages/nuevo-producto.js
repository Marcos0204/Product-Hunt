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
  company:'',
  image:'',
  description:'',
  url:''
}


const NewProduct = () =>  {

  const [ error, setError] = useState(false);

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(initialState, validationCreateAcount, crearCuenta);

  const { name, company, image, description, url } = values;
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
            <fieldset>
              <legend>Informacion general</legend>
              <Field>
                  <label htmlFor="name">Nombre</label>
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
                  <label htmlFor="company">Empresa</label>
                  <input 
                      type="text"
                      id="company"
                      placeholder="Empresa"
                      name="company"
                      value={company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Field>

              {errors.company && <Error>{errors.company}</Error> }
              
              <Field>
                  <label htmlFor="image">Image</label>
                  <input 
                      type="file"
                      id="image"
                      name="image"
                      value={image}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Field>

              {errors.image && <Error>{errors.image}</Error> }

              <Field>
                  <label htmlFor="url">URL</label>
                  <input 
                      type="url"
                      id="url"
                      name="url"
                      value={url}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Field>

              {errors.url && <Error>{errors.url}</Error> }
            </fieldset>
            <fieldset>
              <legend>Sobre tu prodúcto</legend>
              <Field>
                  <label htmlFor="description">Descripcion</label>
                  <textarea 
                      id="description"
                      name="description"
                      value={description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Field>

              {errors.description && <Error>{errors.description}</Error> }
            </fieldset>
              {error && <Error>Oops!... Este usuario ya esta en uso</Error>}
  
              <InputSubmit 
                type="submit"
                value="Crear Prodúcto"
              />
          </Form>
        </>
      </Layout>
    </>
  )
};

export default NewProduct
