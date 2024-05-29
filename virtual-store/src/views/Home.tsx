import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <NavBar />
      <Hero firstText={"tecnología"} secondText={"renovada"}  />
      <main>
        <div className={styles["product-container"]} id="products">
          <Link className={styles["product-card"]} to="/details/1234">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </Link>
          <Link className={styles["product-card"]} to="/details/4567">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </Link>
          <Link className={styles["product-card"]} to="/details/78912">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </Link>
          <Link className={styles["product-card"]} to="/details/2345">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </Link>
          <Link className={styles["product-card"]} to="/details/5678">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </Link>
          <Link className={styles["product-card"]} to="/details/89123Link">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
