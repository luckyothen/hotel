import React from 'react';
import styled from 'styled-components';
import Container from '../Controls/Container/Container';
import Branding from '../Branding/Branding';

const FooterStyled = styled.footer`
padding: 5rem 0;
background-color: #F9F9F9;
`;

const FooterWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;

  & > *:not(:first-child){
    color:#929292;
  }

`;

const FooterLinkGroupStyled = styled.div`
  padding: 1rem;
`;

const FooterTextAboutStyled = styled.p`
  margin-bottom: 1rem;
  color: #77777F;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <Container>
        <FooterWrapperStyled>
          <FooterLinkGroupStyled>
            <Branding color="#1DC1F8" >Zogo Hotel</Branding>
            <FooterTextAboutStyled>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
            </FooterTextAboutStyled>
            <FooterTextAboutStyled>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
            </FooterTextAboutStyled>
          </FooterLinkGroupStyled>
          <FooterLinkGroupStyled>
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </FooterLinkGroupStyled>
          <FooterLinkGroupStyled>
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </FooterLinkGroupStyled>
          <FooterLinkGroupStyled>
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </FooterLinkGroupStyled>
        </FooterWrapperStyled>
      </Container>
    </FooterStyled >
  )
}
