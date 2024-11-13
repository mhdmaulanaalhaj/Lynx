// pages/_app.tsx
import Layout from "../app/layout"; // Pastikan jalur relatifnya benar

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ElementType;
  pageProps: any;
}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
