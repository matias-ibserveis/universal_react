
import Mi_Link from '../components/Mi_Link.js'

const About = () => {

  const texto_home = 'Go to home'
  const enlace_home = ''

  return (
  <div>
    <h1>About</h1>

    <Mi_Link 
      enlace={enlace_home}
      texto={texto_home} 
    >
    </Mi_Link>

    <p>A Javascript programmer</p>
    <img src="imagenes/javascript-logo.png" alt="logo" height="200px" />
  </div>
)
  }

export default About