
import Mi_Link from './components/mi_Link'
import { makeStyles } from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid'

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

<Grid container spacing={2}>
  <Grid item xs={12}>
    <h1>About</h1>

    <Mi_Link 
      enlace={enlace_home}
      texto={texto_home} 
    >
    </Mi_Link>

    <p>A Javascript programmer</p>
    <img  src="imagenes/javascript-logo.png" alt="logo"  className={classes.media} / >
  
  </Grid>

  </Grid>
  </div>
)
  }

export default About