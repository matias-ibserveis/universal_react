
// Antes de realizar este código para blog.js y post.js
// ver video curso next: https://youtu.be/7J4iL1HDshQ

// Poner  [] en nombre del archivo , lo convierte en archivo "dinámico"

import Layout from "./components/Layout";
import Link from "next/link";

const PostLink = ({ dato, title }) => (
  <li>
    <Link as={`/${dato}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
  <Layout title="My Blog">
    <ul>
      <PostLink dato="react-post" title="React Post" />
      <PostLink dato="angular-post" title="Angular Post" />
      <PostLink dato="vue-post" title="Vue Post" />
    </ul>
  </Layout>
  )
}
