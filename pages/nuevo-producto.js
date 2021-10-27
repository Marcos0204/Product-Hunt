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
  company: '',
  image: '',
  url:'',
  description:''
}


const NewProduct = () =>  {

  const [ error, setError] = useState(false);

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(initialState, validationCreateAcount, crearCuenta);

  const { name, company, image, url, description } = values;
  const router = useRouter()

  async function crearCuenta() {
    
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
              <legend>Informacion General</legend>
            
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
                    <label htmlFor="company">Empresa</label>
                    <input 
                        type="text"
                        id="company"
                        placeholder="Nombre emprea o compañia"
                        name="company"
                        value={company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                {errors.company && <Error>{errors.company}</Error> }

                <Field>
                    <label htmlFor="image">Imagen</label>
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
                    <label htmlFor="image">URL</label>
                    <input 
                        id="url"
                        name="url"
                        value={url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Field>

                {errors.url && <Error>{errors.url}</Error> }
              </fieldset>
              {/** */}

              <fieldset>
                <legend>sobre tu producto</legend>
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

              <InputSubmit 
                type="submit"
                value="Crear Producto"
              />
          </Form>
        </>
      </Layout>
    </>
  )
};

export default NewProduct
