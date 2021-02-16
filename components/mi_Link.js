
// Customize CSS:
// https://material-ui.com/customization/components/
// https://codeburst.io/my-journey-to-make-styling-with-material-ui-right-6a44f7c68113


import Link from 'next/link'
import { Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  enlace: {
    color: 'green',
    fontFamily: 'times new roman',
    textDecoration: 'underline',
    fontSize: '1.5rem',
    '&:hover': {
      color: 'red',
    },
  }
})

const mi_Link = (props) => {
  const {texto, enlace} = props
  const cadena_enlace= `/${enlace}`

  const classes = useStyles()

  return (
  <div>
 
    <Link href={cadena_enlace} >
    <Typography 
        variant="h3"
        color="secondary"
        className={classes.enlace}>  
        {texto}
    </Typography>

    </Link>
   
  </div>
)
}

export default mi_Link