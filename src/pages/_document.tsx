import Document, { Html, Main, Head, NextScript } from "next/document";

export default class MyDocument extends Document {
  return() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Chivo:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />
          <title>Document</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
