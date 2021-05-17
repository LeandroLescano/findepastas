import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="index-section">
        <div className="row align-items-center h-100 mx-2">
          <div className="col-12 order-md-2 col-md-6 text-center">
            <img
              src="/images/texto-logo-short.png"
              className="img-fluid logo"
              alt="Logo"
            />
          </div>
          <div className="col-12 order-md-1 col-md-6 info-section">
            <h1 className="fw-bold">Food Delivery Service</h1>
            <h2 className="fw-bold">Pedidos por encargo de Lunes a Jueves</h2>
            <h2 className="fw-bold">
              Entregas Viernes, Sábados, Domingos y Feriados
            </h2>
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
