// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider,
    updateProfile,
    signOut

} from 'firebase/auth';

import { getFirestore, updateDoc, doc,  addDoc, collection } from 'firebase/firestore';

import firebaseApp from './Config';


export const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


class appfire {
    
    async  register( name, email, password)  {
    
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: name,
           })
        return res
    }
    
    // Inicia sesión del usuario
    async login(email, password) {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res
        //console.log(user)
    }
    // Cierra la sesión del usuario
    async SignOut() {
        await signOut(auth);
    }


    ///crear producto en la DB
    async createPruduct( producto) {
        
        try {
            const docRef = await addDoc(collection(firestore, "products"), producto);
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

}
const Firebase = new appfire()
export default Firebase;