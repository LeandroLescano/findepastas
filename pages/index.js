import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="index-section">
        <div className="row align-items-center h-100 mx-2 g-2">
          <div className="col-12 col-md-6 info-section text-center">
            <h1 className="fw-bold">Food Delivery Service</h1>
            <h3 className="fw-bold">Pedidos por encargo de Lunes a Jueves</h3>
            <h3 className="fw-bold">
              Entregas Viernes, Sábados, Domingos y Feriados
            </h3>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src="/images/texto-logo-short.png"
              className="img-fluid logo"
              alt="Logo"
            />
          </div>
        </div>

        <div className="container-background">
          <img
            src="/images/sorrentinos-back.webp"
            className="img-back"
            alt="background"
          />
        </div>
      </div>
    </Layout>
  );
}
