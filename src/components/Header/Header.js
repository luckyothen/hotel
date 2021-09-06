import React from "react";
import styled from "styled-components";
import Container from "../Controls/Container/Container";

const HeaderSection = styled.section`
  background-image: linear-gradient(
    to right top,
    #9e5872,
    #9c587c,
    #975988,
    #905c93,
    #855f9e
  );

  height: 100vh;
`;

export default function Header(props) {
  return (
    <HeaderSection>
      <Container>{props.children}</Container>
    </HeaderSection>
  );
}
