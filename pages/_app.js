import "../styles/navbar.scss";
import "../styles/index.scss";
import "../styles/menu.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
