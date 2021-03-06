// Import do contexto (integração entre os components)
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'

// Import do css global
import '../styles/global.css'


function MyApp({ Component, pageProps }) {

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
