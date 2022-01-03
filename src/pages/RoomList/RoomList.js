import React from 'react'
import ContactTopBar from '../../components/RoomListComponent/ContactTopBar/ContactTopBar';
import Nav from '../../components/Shared/Nav/Nav';

function RoomList() {
  return (
    <>
      <ContactTopBar />
      <Nav position="static"
        brandingTextColor="#1DC1F8"
        navBackgroundColor="#fff"
        isInview="false"
        linkColor="#A1B1C1"
        arrowDownIconColor="#A1B1C1"
      />
    </>
  )
}

export default RoomList
