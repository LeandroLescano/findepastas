import Link from "next/link";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      document.getElementById("btnInicio").classList.add("active");
    } else {
      document.getElementById("btnMenu").classList.add("active");
    }
  }, []);

  return (
    <nav className="navbar navbar-dark">
      <div className="container nav-container">
        <Link href="/">
          <div id="btnInicio" className="nav-item fs-3">
            Inicio
          </div>
        </Link>
        <img
          className="img-fluid rounded-circle"
          width="80"
          src="/images/logo.webp"
          alt="Logo"
        />
        <Link href="/menu">
          <div id="btnMenu" className="nav-item fs-3">
            Menú
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
