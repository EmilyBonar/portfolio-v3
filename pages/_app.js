import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { MDXProvider } from '@mdx-js/react';

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
