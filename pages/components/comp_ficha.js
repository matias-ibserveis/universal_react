
import { makeStyles } from '@material-ui/core/styles';
import Mi_Link from './comp_link'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //width:'400px'//width: '75%'
  },
}));

export default function Mi_ficha(props) {

  const {tituloDato, enlaceDato, textoenlaceDato, descripcionDato } = props
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
    <Paper className={classes.paper}>
      <h1>{tituloDato}</h1>
      <Mi_Link  enlace={enlaceDato} texto={textoenlaceDato}>
      </Mi_Link>
      <p>{descripcionDato}</p>
    </Paper>
  </Grid>
  );
}