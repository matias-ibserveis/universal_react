
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Mi_navbar from './components/comp_navbar1.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const texto_inicial= "Empresa ibserveis"

  return (
  <div className={classes.root}>
    <Grid container spacing={1}>
    
    <Grid item xs={12}>
        <Mi_navbar texto_barra ={texto_inicial}/>
    </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h1>Home</h1>
          <Link href="/about">
            <a>Go to about</a>
          </Link>
          <p>Welcome to the home page</p>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <p>Espacio para más info</p>
        </Paper>
      </Grid>

    </Grid>
  </div>
  );
}
