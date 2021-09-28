import React from "react";
import Header from "../../components/Header/Header";
import Favorites from "../../components/Favorites/Favorites";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";

export default function Front() {
  return (
    <>
      <Header />
      <Favorites />
      <Services />
      <About />
    </>
  );
}
