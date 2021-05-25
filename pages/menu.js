import Layout from "../components/layout";
import Tabletop from "tabletop";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

function Menu() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let localCat = JSON.parse(window.sessionStorage.getItem("categories"));
    if (!!localCat) {
      setCategories(localCat);
      setData(JSON.parse(window.sessionStorage.getItem("products")));
    }
    Tabletop.init({
      key: "https://docs.google.com/spreadsheets/d/1TOKLghR2wYq7JQr-9fB6TkT58S_zH80iD8DFsbf-lVQ/edit#gid=0",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  useEffect(() => {
    let cat = [...new Set(data.map((item) => item.categoria))];
    let objCat = [];
    cat.map((c) => objCat.push({ nombre: c, gramos: [] }));
    data.map((prod) => {
      if (prod.gramos !== "")
        objCat.map((cat) => {
          if (cat.nombre === prod.categoria) {
            if (!cat.gramos.includes(prod.gramos)) {
              cat.gramos.push(prod.gramos);
            }
            if (prod.gramos2 !== "" && !cat.gramos.includes(prod.gramos2)) {
              cat.gramos.push(prod.gramos2);
            }
          }
        });
    });
    console.log(objCat);
    setCategories(objCat);
  }, [data]);

  useEffect(() => {
    if (categories.length > 0) {
      setLoading(false);
      window.sessionStorage.setItem("categories", JSON.stringify(categories));
      window.sessionStorage.setItem("products", JSON.stringify(data));
    }
  }, [categories]);

  return (
    <Layout title="Finde pastas | Menú">
      {!loading ? (
        <div className="row w-100">
          <div className="col-12 col-md-6  text-center text-sm-start">
            <h1 className="fw-bold">Menu - Finde pastas</h1>
          </div>
          <div className="col-12 col-md-6 text-center text-sm-end mb-2">
            <a
              href="https://wa.me/541131031390?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-pedido">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">
                  <span className="mr-2">Realizar pedido</span>{" "}
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
              </button>
            </a>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
      <div className="row">
        {categories.map((cat, i) => {
          return (
            <div key={i} className="col">
              <table className="table table-menu">
                <thead>
                  <tr>
                    <th scope="col fw-bold">{cat.nombre}</th>
                    {cat.nombre !== "Salsas" && cat.nombre !== "Fideos" ? (
                      <>
                        <th scope="col text-center">1/2 doc.</th>
                        <th scope="col">1 doc.</th>
                      </>
                    ) : (
                      <>
                        {cat.gramos.map((item, i) => {
                          return (
                            <React.Fragment key={i}>
                              {item && (
                                <th scope="col text-center">
                                  {item >= 1000
                                    ? item / 1000 + "kg."
                                    : item + "gr."}
                                </th>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((item) => item.categoria == cat.nombre)
                    .map((item, i) => {
                      if (!!item.precio_docena || !!item.precio_media) {
                        return (
                          <tr key={i}>
                            <td>{item.producto}</td>
                            <td>${item.precio_media}</td>
                            {item.precio_docena ? (
                              <td>${item.precio_docena}</td>
                            ) : (
                              <td>Consultar</td>
                            )}
                          </tr>
                        );
                      } else if (!!item.gramos || !!item.gramos2) {
                        return (
                          <tr key={i}>
                            <td>{item.producto}</td>
                            {item.gramos2 && !item.gramos ? null : (
                              <td>${item.precio_gramos}</td>
                            )}
                            {item.gramos && !item.gramos2 ? null : (
                              <td>${item.precio_gramos2}</td>
                            )}
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Menu;
