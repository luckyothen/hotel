import React from "react";
import styled from "styled-components";
import Container from "../../Controls/Container/Container";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import BookingBar from "../BookingBar/BookingBar";
import { device } from '../../../themes/MediaDefaults';



const HeaderStyled = styled.section`
  padding-top:6%;
  background-image: linear-gradient(
    to right top,
    #9e5872,
    #9c587c,
    #975988,
    #905c93,
    #855f9e
  );

  height: 100%;

  @media only screen and ${device.sm}{
        height: 100%;
        padding-top:16%;
    
          
      }
  
`;

function Header({ isInview, propRef }) {

  return (

    <HeaderStyled ref={propRef}>
      <Container>
        <HeaderTitle />
        <BookingBar />
      </Container>
    </HeaderStyled>
  );
}

const forwardedRefHeader = React.forwardRef(Header);

export default forwardedRefHeader;