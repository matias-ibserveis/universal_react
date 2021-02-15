
import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home</h1>

    <Link href="/about">
      <a>Go to about</a>
    </Link>

    <p>Welcome to the home page</p>


    <style jsx>{`
        a {
         color: blue;
         text-decoration: underline;
        }
    `}
    </style>
    <style global jsx>{`
      a {
        color: red;
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>

  </div>

  
)



export default Index