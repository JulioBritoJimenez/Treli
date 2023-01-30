import '../styles/globals.css'
import { League_Spartan } from '@next/font/google';


const spartan = League_Spartan({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${spartan.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
