import React from "react";
import Favorites from "../../components/HomeComponent/Favorites/Favorites";
import Services from "../../components/HomeComponent/Services/Services";
import About from "../../components/HomeComponent/About/About";
import News from "../../components/HomeComponent/News/News";
import Contact from "../../components/HomeComponent/Contact/Contact";



export default function Home() {

  return (
    <>

      <Favorites />
      <Services />
      <About />
      <News />
      <Contact />
    </>
  );
}
