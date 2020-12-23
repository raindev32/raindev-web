import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="antialiased font-sans">
          <Main />
          <NextScript />

          <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

          <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>

          <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>

          <script>var Alert = ReactBootstrap.Alert;</script>
        </body>
      </Html>
    )
  }
}

export default MyDocument