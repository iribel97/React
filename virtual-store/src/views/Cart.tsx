//import styles from "./Cart.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";


function Cart() {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);

  useEffect(() => {
    const products = localStorage.getItem("cart");
    if (products) {
      setProductsOnCart(JSON.parse(products));
    }
  }, []);

  return (
    <>
      <NavBar />
      <Hero firstText={"mi"} secondText={"carrito"} />
      <main>
        <section>
          {productsOnCart.map((each: Product) => (
            <CartCard
              key={each.id}
              product={each}
            />
          ))}
        </section>

        <CartResume total="900000" />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
