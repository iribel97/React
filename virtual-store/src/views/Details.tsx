import styles from "./Details.module.css";
import styles1 from '../components/Home.module.css';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Details() {
  return (
    <>
      <NavBar />
      <main>
        <div className={styles["details-container"]}>
          <div id="details" className={styles["columns-container"]}>
            <section className={styles["product-images-block"]}>
              <div className={styles["product-images"]}>
                <img
                  className={styles["mini-img"]}
                  src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                  alt="MacBook Pro 13'4"
                >
                </img>
                <img
                  className={styles["mini-img"]}
                  src="https://i.postimg.cc/Y91Q1tYQ/mock2.jpg"
                  alt="MacBook Pro 13'4"
                >
                </img>
              </div>
              <img
                className={styles["big-img"]}
                id="big-img"
                src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                alt="MacBook Pro 13'4"
              >
              </img>
            </section>
            <div className={styles["product-description-block"]}>
              <h1 className={styles["product-title"]}>MacBook Pro 13'4</h1>
              <form className={styles["product-selector"]}>
                <fieldset className={styles["product-fieldset"]}>
                  <label className={styles["product-label"]} htmlFor="color">
                    Color
                  </label>
                  <select className={styles["product-select"]} id="color">
                    <option value="" disabled>
                      Selecciona un color
                    </option>
                    <option value="Silver">Silver</option>
                  </select>
                </fieldset>
              </form>
              <div className={styles["product-description"]}>
                <span className={styles["product-label"]}>Descripción</span>
                <p>
                  Experience the power of creativity with the MacBook Pro 13'4.
                  Featuring 8GB of RAM and 512GB of storage, this laptop
                  provides the performance and storage capacity needed for
                  demanding tasks. The sleek design in silver and space gray
                  adds a touch of sophistication. The high-resolution Retina
                  display brings your visuals to life, whether you're editing
                  photos, creating videos, or simply browsing the web. With the
                  latest technology and a lightweight build, the MacBook Pro
                  13'4 is the perfect companion for professionals and creative
                  individuals alike.
                </p>
              </div>
            </div>
            <div className={styles["product-checkout-block"]}>
              <div className={styles["checkout-container"]}>
                <span className={styles["checkout-total-label"]}>Total:</span>
                <h2 id="price" className={styles["checkout-total-price"]}>
                  $750000
                </h2>
                <p className={styles["checkout-description"]}>
                  Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                  50711 haciendo la solicitud en AFIP.
                </p>
                <ul className={styles["checkout-policy-list"]}>
                  <li>
                    <span className={styles["policy-icon"]}>
                      <img src="../public/truck.png" alt="Truck">
                      </img>
                    </span>
                    <span className={styles["policy-desc"]}>
                      Agrega el producto al carrito para conocer los costos de
                      envío
                    </span>
                  </li>
                  <li>
                    <span className={styles["policy-icon"]}>
                      <img src="../public/plane.png" alt="Plane">
                      </img>
                    </span>
                    <span className={styles["policy-desc"]}>
                      Recibí aproximadamente entre 10 y 15 días hábiles,
                      seleccionando envío normal
                    </span>
                  </li>
                </ul>
                <div className={styles["checkout-process"]}>
                  <div className={styles["top"]}>
                    <input type="number" min="1" value="1">
                    </input>
                    <button type="button" className={styles["cart-btn"]}>
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["sales-block"]}>
            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
            <div id="product-container" className={styles1["product-container"]}>
              <a className={styles1["product-card"]} href="./details.html">
                <img
                  className={styles1["product-img"]}
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                >
                </img>
                <div className={styles1["product-info"]}>
                  <span className={styles1["product-title"]}>
                    Kindle Paperwhite
                  </span>
                  <span className={styles1["product-description"]}>Black</span>
                  <div className={styles1["product-price-block"]}>
                    <span className={styles1["product-price"]}>100000</span>
                    <span className={styles1["product-discount"]}>50% Off</span>
                  </div>
                  <div className={styles1["product-tax-policy"]}>
                    Incluye impuesto País y percepción AFIP
                  </div>
                </div>
              </a>
              <a className={styles1["product-card"]} href="./details.html">
                <img
                  className={styles1["product-img"]}
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                >
                </img>
                <div className={styles1["product-info"]}>
                  <span className={styles1["product-title"]}>
                    Kindle Paperwhite
                  </span>
                  <span className={styles1["product-description"]}>Black</span>
                  <div className={styles1["product-price-block"]}>
                    <span className={styles1["product-price"]}>100000</span>
                    <span className={styles1["product-discount"]}>50% Off</span>
                  </div>
                  <div className={styles1["product-tax-policy"]}>
                    Incluye impuesto País y percepción AFIP
                  </div>
                </div>
              </a>
              <a className={styles1["product-card"]} href="./details.html">
                <img
                  className={styles1["product-img"]}
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                >
                </img>
                <div className={styles1["product-info"]}>
                  <span className={styles1["product-title"]}>
                    Kindle Paperwhite
                  </span>
                  <span className={styles1["product-description"]}>Black</span>
                  <div className={styles1["product-price-block"]}>
                    <span className={styles1["product-price"]}>100000</span>
                    <span className={styles1["product-discount"]}>50% Off</span>
                  </div>
                  <div className={styles1["product-tax-policy"]}>
                    Incluye impuesto País y percepción AFIP
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
