import React from "react";
import { useSelector } from "react-redux";
import Favorites from "../../components/HomeComponent/Favorites/Favorites";
import Services from "../../components/HomeComponent/Services/Services";
import About from "../../components/HomeComponent/About/About";
import News from "../../components/HomeComponent/News/News";
import Contact from "../../components/HomeComponent/Contact/Contact";
import Header from "../../components/HomeComponent/Header/Header";
import Nav from "../../components/Shared/Nav/Nav";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const isSlideDownNav = useSelector((state) => state.uiReducer.isSlideDownNav);

  const [ref, inView] = useInView({
    threshold: 0.9,
  });

  return (
    <>
      <Nav isInview={inView} isSlideDownNav={isSlideDownNav} />
      <Header propRef={ref} />
      <Favorites />
      <Services />
      <About />
      <News />
      <Contact />
    </>
  );
}
