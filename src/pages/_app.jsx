import "@/styles/globals.css"
import "../styles/globals.css"
import Layout from "./Layout"

export default function App({ Component, pageProps }) {
  return (
    <Layout className="relative">
      <Component {...pageProps} />
    </Layout>
  )
}
