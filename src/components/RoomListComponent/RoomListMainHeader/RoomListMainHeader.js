import React from "react";
import { useSelector } from "react-redux";
import ContactTopBar from "../ContactTopBar/ContactTopBar";
import Nav from "../../Shared/Nav/Nav";
import RoomListHeader from "../RoomListHeader/RoomListHeader";
import { useInView } from "react-intersection-observer";

function RoomListMainHeader({ pageTitle }) {
  const isSlideDownNav = useSelector((state) => state.uiReducer.isSlideDownNav);
  const [ref, inView] = useInView({
    threshold: 0.9,
    skip: true,
  });

  return (
    <>
      <ContactTopBar />

      <Nav
        isInview={inView}
        isSlideDownNav={isSlideDownNav}
        navBackgroundColor="#fff"
      />

      <RoomListHeader pageTitle={pageTitle} propRef={ref} />
    </>
  );
}

export default RoomListMainHeader;
