
// npm i isomorphic-unfetch

import Layout from "./components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

export default function About(props) {

    const { user, statusCode } = props
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed" height="200px" />
      </Layout>
    );
}

About.getInitialProps = async () => {
  const response = await fetch("https://api.github.com/users/reedbarger")
  const statusCode = response.status > 200 ? response.status : false
  const data = await response.json()
  return { user: data, statusCode };
}



