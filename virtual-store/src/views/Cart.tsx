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
      <Hero firstText={"mi"} secondText={"carrito"} />
      <main>
        <CartCard
          title="iPad Pro 12.9"
          photo="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
          description="The iPad Pro 12.9 is a stunning piece of technology, boasting a large 12.9-inch Retina display with ProMotion technology. With 256GB of storage, this iPad provides ample space for all your files, apps, and multimedia content. The sleek and slim design, combined with the silver color, gives it a sophisticated look. Enjoy seamless connectivity with the WiFi feature. Capture your memorable moments with the high-quality camera and relive them on the impressive screen. Whether you're a professional artist, student, or just someone who appreciates cutting-edge technology, the iPad Pro 12.9 is a versatile device that meets all your needs."
          price="900000"
          quantity="1"
          color="black"
        />

        <CartResume total="900000" />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
