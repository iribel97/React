import styles from "./Home.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import products from "../assets/products";
import OnSaleCard from './../components/OnSaleCard';

export default function OnSale() {
  return (
    <>
      <NavBar />
      <Hero firstText={"tecnología"} secondText={"renovada"} />
      <main>
        <div className={styles["product-container"]} id="products">
          {products
            .filter((product) => product.onsale)
            .map((each) => (
              <OnSaleCard
                key={each.id}
                id={each.id}
                title={each.title}
                price={each.price}
                color={each.colors[0]}
                image={each.images[0]}
              />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
