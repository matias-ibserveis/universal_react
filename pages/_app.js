
// https://reacttricks.com/nested-dynamic-layouts-in-next-apps/

// animated FRAME MOTION:
// https://reacttricks.com/animating-next-page-transitions-with-framer-motion/

 // animated
// https://stackoverflow.com/questions/51270386/how-to-apply-transitions-to-full-page-in-material-ui-and-keep-appbar-fixed
// https://codesandbox.io/s/04p1v46qww

// FLip: https://jperasmus.me/posts/page-transitions-for-nextjs



import '../styles/globals.css'
import MainLayout from './components/mainLayot'


function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
         <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
