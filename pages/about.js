
import Mi_Link from '../components/Mi_Link.js'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
   media: {
    height: 100,
    width: '50%'
  },
})

const About = () => {

  const texto_home = 'Go to home'
  const enlace_home = ''
  const classes = useStyles()

  return (
  <div>
    <h1>About</h1>

    <Mi_Link 
      enlace={enlace_home}
      texto={texto_home} 
    >
    </Mi_Link>

    <p>A Javascript programmer</p>
    <img  src="imagenes/javascript-logo.png" alt="logo"  className={classes.media} / >
  </div>
)
  }

export default About