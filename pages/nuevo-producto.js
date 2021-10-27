import React, { useState, useContext } from "react";
import { useRouter } from 'next/router';
import { css } from '@emotion/core';
import FileUploader from 'react-firebase-file-uploader'
import Layout from '../components/Layout/Layout';
import { Form, Field, InputSubmit,  Error } from '../components/ui/Form/Form';

import { FirebaseContext } from '../Firebase';

// validaciones
import useValidation from '../hooks/useValidation';
import ValidateCreateProduct from '../validation/ValidateCreateProduct'


const initialState = {
  name: '',
  company: '',
//  image: '',
  url:'',
  description:''
}


const NewProduct = () =>  {

  // state de las imagenes
  const [nombreimagen, guardarNombre] = useState('');
  const [subiendo, guardarSubiendo] = useState(false);
  const [ progreso, guardarProgreso ] = useState(0);
  const [urlimagen, guardarUrlImagen] = useState('');

  const [ error, setError] = useState(false);

  const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(initialState, ValidateCreateProduct, createProduct);

  const { name, company, image, url, description } = values;
  const router = useRouter()
  
  const { user, Firebase } = useContext(FirebaseContext)



  async function createProduct() {
    
    if(!user){
      return router.push('/login')
    };

    const product = {
      name,
      company,
      url,
      description,
      votes:'',
      comments:'',
      create: Date.now(),
      uid: user.uid
    }
    Firebase.createPruduct(product);
  }


  
  const handleProgress = progreso => guardarProgreso({ progreso });

  const handleUploadError = error => {
      guardarSubiendo(error);
      console.error(error);
  };

  const handleUploadSuccess = name => {
      guardarProgreso(100);
      guardarSubiendo(false);
      guardarNombre(name)
      firebase
          .storage
          .ref("products")
          .child(name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            guardarUrlImagen(url);
          } );
  };

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
                      <FileUploader
                          accept="image/*"
                          id="image"
                          name="image"
                          randomizeFilename
                          storageRef={firebase.storage.ref("productos")}
                          onUploadStart={handleUploadStart}
                          onUploadError={handleUploadError}
                          onUploadSuccess={handleUploadSuccess}
                          onProgress={handleProgress}
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
