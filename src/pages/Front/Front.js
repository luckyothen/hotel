import React from "react";
import Header from "../../components/Header/Header";
import Favorites from "../../components/Favorites/Favorites";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import News from "../../components/News/News";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

export default function Front() {
  return (
    <>
      <Header />
      <Favorites />
      <Services />
      <About />
      <News />
      <Contact />
      <Footer />
    </>
  );
}
