import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children, title = "Finde pastas" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Catalogo web ~Findepastas~" />
        <meta name="author" content="Lescano Leandro" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
          crossOrigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <div className="container">
        <main>{children}</main>
      </div>
      <footer>
        Developed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://lescanoleandro.vercel.app"
        >
          Lescano Leandro
        </a>
      </footer>
    </div>
  );
}
