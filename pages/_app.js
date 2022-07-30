import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link
          rel="stylesheet"
          as="font"
          href="https://use.typekit.net/dvr7fqc.css?display=swap"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AVA CHALIE - VOCALIST</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
