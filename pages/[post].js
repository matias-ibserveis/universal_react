import Layout from "./components/Layout";
import {useRouter} from 'next/router'


export default Post = () => {

  const {query} = useRouter()
  const titulo = query.title
  
  return(
  <Layout title={titulo}>
    <p style={{ width: "80vw" }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
      eaque! Ad explicabo eum cumque, voluptate quaerat perferendis eligendi
      eveniet sint dolorem in odit sed mollitia, eos rerum, quod saepe atque!
    </p>
  </Layout>
  )

  }
