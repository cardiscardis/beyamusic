import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        
      </Head>
      <body>
        <Main />
        <NextScript />
        {/*<Script type="text/javascript" src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous" strategy="beforeInteractive"></Script>*/}
        {/*<Script type="text/javascript" src="https://drive.google.com/file/d/1x_pMan_N77h2WQlljjP-75oH0bzRXRpn/" strategy="beforeInteractive" crossOrigin='anonymous'></Script>*/}
        <Script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></Script>
        <Script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></Script>       
      </body>
    </Html>
  )
}