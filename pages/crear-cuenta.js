import React, { useState } from "react";
import { css } from '@emotion/core';
import Layout from '../components/Layout/Layout';
import { Form, Field, InputSubmit,  Error } from '../components/ui/Form/Form';

import firebaseApp from '../Firebase/Config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider,

} from 'firebase/auth';

import Firebase from '../Firebase/firebase';

const auth = getAuth(firebaseApp);

//const googleAuthProvider = new GoogleAuthProvider(); 

const CreateAcount = () => {
    const [ iseRegister, SetIsRegister ] = useState(true)
    const [ email, setEmail ] = useState('');
    const [password, setPassword] = useState('')
    const [ user, setUser ]= useState(null)
    console.log(user)

    async function submitHandler(e) {
        e.preventDefault();
        
        const res = await Firebase.register(email, password);
        setUser(res)
        
        //const email= e.target.email.value;
        //const password = e.target.password.value;
        // if(iseRegister){
        //     const res = await createUserWithEmailAndPassword(auth, email, password);
        //     setUser(res)
        // } else {
        //     const res = await signInWithEmailAndPassword(auth, email, password);
        //     setUser(res)
        // }
        
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
            onSubmit={submitHandler}
            noValidate
          >
              <Field>
                  <label htmlFor="nombre">Nombre</label>
                  <input 
                      type="text"
                      id="name"
                      placeholder="Tu Nombre"
                      name="name"
                      //value={name}
                      //onChange={handleChange}
                      //onBlur={handleBlur}
                  />
              </Field>

  
              <Field>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="email"
                      id="email"
                      placeholder="Tu Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      //onBlur={handleBlur}
                  />
              </Field>
  
              <Field>
                  <label htmlFor="password">Password</label>
                  <input 
                      type="password"
                      id="password"
                      placeholder="Tu Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      //onBlur={handleBlur}
                  />
              </Field>
  
              <InputSubmit 
                type="submit"
                value="Crear Cuenta"
              />
          </Form>
        </>
      </Layout>
    </>
    
  );
};

export default CreateAcount