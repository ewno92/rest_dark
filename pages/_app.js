import Layout from "../components/Layout";
import "../styles/globals.scss";
import "../styles/Sidebar.scss";
import "../styles/Layout.scss";
import "../styles/Home.scss";
import "../styles/HomeMenu.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
