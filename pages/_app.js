 // Import bootstrap CSS
import '../styles/globals.css'
import '../styles/plugins.bundle.css'
import '../styles/styles.bundle.css'
import { useEffect } from "react";
import Script from "next/script";
import Head from 'next/head';
import Navbar from '../components/inc/Navbar'
import Search from "../components/inc/Search";
import Footer from '../components/inc/Footer';
import {useRouter} from 'next/router';
import AdminNavbar from '../components/inc/admin/AdminNav';

export default function App({ Component, pageProps }) {

 /*  useEffect(() => {
    //require("jquery/dist/jquery.js");
    require("../public/js/plugins.bundle.js")
    require("../public/js/scripts.bundle.js")
  }, []); */

  const router = useRouter()
  const pathname  = router.pathname

  const checkPage = (pathname) => {
      if(pathname == '/admin')
          return (
            <>
              <AdminNavbar />
            </>
          )
      else 
      return (
        <>
          <Navbar />
          <Search />
        </>
      )
  }

  return (
    <>
      <Head>

      <meta charSet="utf-8" />
      {/*<meta charSet="X-UA-Compatible" content="IE=edge" />*/}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

        
        <meta name="description" content="Listen App - Online Music Streaming App Template" />
        <meta name="keywords" content="music template, music app, music web app, responsive music app, music, themeforest, html music app template, css3, html5" />

        <link rel="apple-touch-icon" href="images/logos/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="images/logos/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/logos/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="images/logos/touch-icon-ipad-retina.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <div id="line_loader"></div>
      {/*<div id="loader">
          <div className="loader">
              <div className="loader__eq mx-auto">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <span className="loader__text mt-2">Loading</span>
          </div>
      </div>*/}
      <div id="wrapper">
        {checkPage(pathname)}
          <main id="page_content">
            <div className="" style={{padding: "20vh 0 0 0"}}></div>
              <div className="under-hero container">
                  <Component {...pageProps} />
              </div>
            <Footer />
          </main>
      </div>
    </>
  )
    
}