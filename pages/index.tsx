import Head from 'next/head'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NewsHub</title>
      </Head>
      <Logo />
    </div>
  )
}
