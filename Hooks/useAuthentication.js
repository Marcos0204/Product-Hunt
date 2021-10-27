/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {auth} from '../Firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const useAuthentication = () => {
    const [ userAuthenticated, setUserAuthenticated ] = useState(null);

    useEffect(() => {
        const suscribe = onAuthStateChanged(auth, (userAuth) =>{
                                            if(userAuth){
                                                setUserAuthenticated(userAuth);
                                            } else {
                                                setUserAuthenticated(null);
                                            }
                                        });
        return suscribe()
    }, [])
    return userAuthenticated
}

export default useAuthentication
