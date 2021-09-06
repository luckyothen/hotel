import React from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import BookingBar from "../../components/BookingBar/BookingBar";

export default function Front() {
  return (
    <>
      <Header>
        <Nav />
        <HeaderTitle />
        <BookingBar />
      </Header>
    </>
  );
}
