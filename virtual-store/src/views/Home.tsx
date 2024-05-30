import styles from './Home.module.css';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <NavBar />
      <Hero firstText={"tecnología"} secondText={"renovada"}  />
      <main>
        <div className={styles["product-container"]} id="products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /><ProductCard />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
