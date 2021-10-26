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

} from 'firebase/auth';

import firebaseApp from './Config';


const auth = getAuth(firebaseApp)
   




class appfire {
    
    async  register( email, password)  {
    
        const res = await createUserWithEmailAndPassword(auth, email, password);
        return res
    }
    

    // // Inicia sesión del usuario
    // async login(email, password) {
    //     return this.auth.signInWithEmailAndPassword(email, password);
    // }

    // // Cierra la sesión del usuario
    // async cerrarSesion() {
    //     await this.auth.signOut();
    // }
}
const Firebase = new appfire()
export default Firebase;