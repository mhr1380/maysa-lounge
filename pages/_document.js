import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta
        name="description"
        content="منوی دیجیتال رستوران بزرگ خادم
      "
      ></meta>
      <title>رستوران بزرگ خادم</title>
      <link rel="icon" href="/logo-black.png" sizes="any" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
