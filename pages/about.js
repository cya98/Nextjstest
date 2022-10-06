import Head from 'next/head'
const AboutPage = () => {
  const name = '정찬하'
  return (
    <div>
      <Head>
        <title> About</title>
      </Head>
      <h1>About Page</h1>
      <p>안녕하세요, {name}님!</p>
    </div>
  )
}

export default AboutPage
