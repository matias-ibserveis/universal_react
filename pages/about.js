
import Link from 'next/link'
import Layout from "./components/Layout"

const About = () => (
  <Layout>
    <h1>About</h1>
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p>A Javascript programmer</p>
    <img src="javascript-logo.png" alt="logo" height="200px" />
  </Layout>
)

export default About