import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> Crypto Currency!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Alex Elbanna Crypto King" />
        <p className="description">
          Get started by  <code>Signing up</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
