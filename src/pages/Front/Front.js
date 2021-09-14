import React from "react";
import Header from "../../components/Header/Header";
import Favorites from '../../components/Favorites/Favorites';
import Services from '../../components/Services/Services';


export default function Front() {
  return (
    <>
      <Header />
      <Favorites />
      <Services />
    </>
  );
}
