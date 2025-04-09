import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Product from "./Components/Product";
import Item from "./Components/Item";
import Suscribe from "./Components/Suscribe";
import Testomonials from "./Components/Testomonials";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Main handleOrderPopup={handleOrderPopup} />
      <Product />
      <Item handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Suscribe />
      <Testomonials />
      <Footer />
    </>
  );
}

export default App;
