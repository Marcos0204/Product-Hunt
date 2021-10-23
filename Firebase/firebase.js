import  { initializeApp } from 'firebase/app';
import firebaseConfig from './Config';

class Firebase {
    constructor() {
       // if(!app.apps.length) {
        const firebaseApp = initializeApp(firebaseConfig);
        
       // }
        // this.auth = app.auth();
        // this.db = app.firestore();
        // this.storage = app.storage();
    }

//     // Registra un usuario
//     async registrar(nombre, email, password) {
//         const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

//         return await nuevoUsuario.user.updateProfile({
//             displayName : nombre
//         })
//     }

//     // Inicia sesión del usuario
//     async login(email, password) {
//         return this.auth.signInWithEmailAndPassword(email, password);
//     }

//     // Cierra la sesión del usuario
//     async cerrarSesion() {
//         await this.auth.signOut();
//     }
}

const firebaseApp = new Firebase();
export default firebaseApp;