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

export default function App({ Component, pageProps }) {

  // useEffect(() => {
  //   // require("../bootstrap/dist/js/bootstrap.bundle.min.js");
  //   require("../public/js/plugins.bundle");
  //   require("../public/js/scripts.bundle");
  // }, []);

  return (
    <>
      <Head>
        <script type="text/javascript" src="js/plugins.bundle.js"></script>
        <script type="text/javascript" src="js/scripts.bundle.js"></script>
      </Head>
      <div id="line_loader"></div>
      <div id="loader">
          <div class="loader">
              <div class="loader__eq mx-auto">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <span class="loader__text mt-2">Loading</span>
          </div>
      </div>
      <div id="wrapper">
        <Navbar />
        <Search />
          <main id="page_content">
            <div class="" style={{padding: "20vh 0 0 0"}}></div>
              <div class="under-hero container">
                  <Component {...pageProps} />
              </div>
            <Footer />
          </main>
      </div>
    </>
  )
    
}
