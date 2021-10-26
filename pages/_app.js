import '../styles/globals.css'
import Firebase, { FirebaseContext } from '../Firebase/index';
import useAuthentication from '../Hooks/useAuthentication';

function MyApp({ Component, pageProps }) {
  const user = useAuthentication()
  console.log(user)
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
