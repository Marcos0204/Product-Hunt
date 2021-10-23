import '../styles/globals.css'
import firebaseApp, { FirebaseContext } from '../Firebase/index'

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider
      value={{
        name:'Marcos',
        firebaseApp
      }}
    >
        <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
