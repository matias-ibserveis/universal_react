
import Link from 'next/link'


const About = () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p>A Javascript programmer</p>
    <img src="imagenes/javascript-logo.png" alt="logo" height="200px" />
  </div>
)

export default About