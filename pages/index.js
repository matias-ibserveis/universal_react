
import Mi_ficha from './components/comp_ficha.js'
import { Fragment } from 'react';

const index_principal = () => {
  return (
  
    <Fragment>

      <Mi_ficha 
        tituloDato='HOME'
        enlaceDato='about'
        textoenlaceDato='go to about'
        descripcionDato='wellcome to the home page'
      />

      <Mi_ficha 
        tituloDato='más información'
        enlaceDato=''
        textoenlaceDato=''
        descripcionDato='Información de empresa'
      />

      <Mi_ficha 
        tituloDato='Noticia'
        enlaceDato=''
        textoenlaceDato=''
        descripcionDato='nuevo curso disponible'
      />

     </Fragment>
  );
}

export default index_principal
