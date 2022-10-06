import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //모든 페이지들이 app.js를 통과하는데  Layout 컴포트를 지나치게함
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
