
// FlexBox : https://material-ui.com/system/flexbox/

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Mi_navbar from  './comp_navbar1'
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  contenedor: {
    //flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexGrow: 1
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
    <Fragment>

    <Grid container  className={classes.contenedor}>
      <Grid  item xs={12}>
          <Mi_navbar texto_barra ={texto_inicial}/>
      </Grid>

        {children}
    
    </Grid>
    </Fragment>
  );
  }


export default MainLayout;