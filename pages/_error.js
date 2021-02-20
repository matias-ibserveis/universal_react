import Layout from "./components/Layout";

export default function ErrorPage({ statusCode }) {
  
  return(
  <Layout title="Error!!!">
    {statusCode
      ? `Could not load your user data: Status Code ${statusCode}`
      : `Couldn't get that page, sorry!`}
  </Layout>
  )
  
  }
