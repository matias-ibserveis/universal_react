
//import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Mi_navbar from  './comp_navbar1'

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

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const texto_inicial= "Empresa ibserveis"

  return (
  <div className={classes.root}>
       

    
    <Grid item xs={12}>
        <Mi_navbar texto_barra ={texto_inicial}/>
    </Grid>

      {children}

 
  
  
  </div>
  );
  }


export default MainLayout;