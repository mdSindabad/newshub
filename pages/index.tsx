import Head from 'next/head'
import Logo from '../components/Logo'
import TopNews from '../components/TopNews'
import { GetStaticProps } from 'next'
import SideBar from '../components/SideBar'

export default function Home({ news }) {
  return (
    <div>
      <Head>
        <title>NewsHub</title>
      </Head>
      <Logo />
      <main className='md:mx-20 mx-4 md:grid md:grid-cols-4 md:gap-4'>
        <TopNews news={news} />
        <SideBar />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)

  const data = await res.json()

  return {
    props: {
      news: data.articles
    }
  }
}
