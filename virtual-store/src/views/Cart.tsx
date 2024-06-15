//import styles from "./Cart.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";

function Cart() {
  return (
    <>
      <NavBar />
      <Hero firstText={"mi"}  secondText={"carrito"}/>
      <main>
        <CartCard />
        <CartResume />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
