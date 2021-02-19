
//import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Mi_Link from './components/mi_Link.js'

const useStyles = makeStyles((theme) => ({
  contenedor: {
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

  return (
  <div>

    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h1>Home</h1>
          <Mi_Link  enlace='about' texto=' go to about'>
          </Mi_Link>
          <p>Welcome to the home page</p>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <p>Información de empresa</p>
        </Paper>
      </Grid>

      </Grid>

  </div>
  );
}
