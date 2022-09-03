import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <style>
    {
      `

      H1 {
          color: red
      }
  
  `
    }   
  </style>
  </>
)}

export default MyApp
