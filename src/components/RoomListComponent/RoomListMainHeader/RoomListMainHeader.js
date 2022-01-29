import React from "react";
import { useSelector } from "react-redux";
import ContactTopBar from "../ContactTopBar/ContactTopBar";
import Nav from "../../Shared/Nav/Nav";
import RoomListHeader from "../RoomListHeader/RoomListHeader";
import { useInView } from "react-intersection-observer";

export default function RoomListMainHeader({ pageTitle }) {
  const isSlideDownNav = useSelector((state) => state.uiReducer.isSlideDownNav);
  const [ref, inView] = useInView({
    threshold: 0.9,
    skip: true,
  });

  return (
    <>
      <ContactTopBar />
      <Nav
        position="static"
        brandingTextColor="#1DC1F8"
        navBackgroundColor="#fff"
        isInview="false"
        linkColor="#A1B1C1"
        arrowDownIconColor="#A1B1C1"
        isSlideDownNav={isSlideDownNav}
        burgerMenuBarColor="#ffb300"
        burgerMenuBarHoverColor="#1DC1F8"
      />
      <RoomListHeader pageTitle={pageTitle} />
    </>
  );
}
