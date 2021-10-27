import '../styles/globals.css'
import Firebase, { FirebaseContext } from '../Firebase/index';
import { auth } from '../Firebase/firebase';
import useAuthentication from '../Hooks/useAuthentication';

function MyApp({ Component, pageProps }) {
  const user = useAuthentication()
  return (
    <FirebaseContext.Provider
      value={{
        Firebase,
        user
      }}
    >
        <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
