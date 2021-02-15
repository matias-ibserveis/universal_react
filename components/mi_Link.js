
import Link from 'next/link'

const mi_Link = (props) => {
  const {texto, enlace} = props
  const cadena_enlace= `/${enlace}`

  return (
  <div>
 
    <Link href={cadena_enlace}>
      <a>{texto}</a>
    </Link>

    <style global jsx>{`
        a {
         color: green;
         text-decoration: underline;
        }
    `}
    </style>
   
  </div>
)

}

export default mi_Link