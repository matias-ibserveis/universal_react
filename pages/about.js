
import Mi_ficha from './components/comp_ficha.js'
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
        
    <Mi_ficha 
      tituloDato='ABOUT'
      enlaceDato={enlace_home}
      textoenlaceDato={texto_home}
      descripcionDato='Información de empresa'
    />

    <Mi_ficha 
      tituloDato='enlaces'
      enlaceDato=''
      textoenlaceDato=''
      descripcionDato='otros enlaces'
      />
    
    <Grid item item xs={12} >
      <p>A Javascript programmer</p>
      <img  src="imagenes/javascript-logo.png" alt="logo"  className={classes.media} / >
    </Grid>

  </Grid>
  </div>
)
  }

export default About