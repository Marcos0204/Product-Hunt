import '../styles/globals.css'
import Firebase, { FirebaseContext } from '../Firebase/index'

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider
      value={{
        name:'Marcos',
        Firebase
      }}
    >
        <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
