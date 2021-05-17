import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children, title = "Finde pastas" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Finde pastas | Food Delivery Service | Takeaway"
        />
        <meta name="author" content="Lescano Leandro" />
        <meta name="keywords" content="delivery, pastas" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Finde pastas" />
        <meta
          property="og:description"
          content="Finde pastas | Food Delivery Service | Takeaway"
        />
        <meta
          property="og:image"
          content="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s320x320/106372876_307749473714937_145437747983629080_n.jpg?tp=1&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=P9CX4sMehBIAX_Oxs5X&edm=ABfd0MgBAAAA&ccb=7-4&oh=20c62d2d4c7f3f88efdf40ab0223843c&oe=60C8B83F&_nc_sid=7bff83"
        />
        <meta property="og:url" content="https://findepastas.vercel.app" />
        <meta property="og:site_name" content="Finde pastas" />
        <meta name="twitter:title" content="Finde pastas" />
        <meta
          name="twitter:description"
          content="Finde pastas | Food Delivery Service | Takeaway"
        />
        <meta
          name="twitter:image"
          content="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-19/s320x320/106372876_307749473714937_145437747983629080_n.jpg?tp=1&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_ohc=P9CX4sMehBIAX_Oxs5X&edm=ABfd0MgBAAAA&ccb=7-4&oh=20c62d2d4c7f3f88efdf40ab0223843c&oe=60C8B83F&_nc_sid=7bff83"
        />
        <meta name="twitter:creator" content="@LeanLescano_" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap"
          rel="stylesheet"
        ></link>
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
