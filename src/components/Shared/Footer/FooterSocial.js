import React from "react";
import styled from "styled-components";
import Container from "../../Controls/Container/Container";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { device } from "../../../themes/MediaDefaults";

const FooterWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 222;
  @media only screen and ${device.sm} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterCopyright = styled.p`
  color: #626262;
`;

const FooterSocialWrapper = styled.li`
  background-color: #f4f4f4;
  box-sizing: border-box;
  padding: 0.7rem 1rem;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const FooterSocialGroup = styled.ul`
  display: flex;
  gap: 1rem;
  @media only screen and ${device.sm} {
    margin: 1rem 0;
  }
`;

export default function FooterSocial() {
  return (
    <>
      <Container>
        <FooterWrapper>
          <FooterCopyright>
            Copyright 2021 &copy; Hotel Zogo All Rights Reserved
          </FooterCopyright>
          <FooterSocialGroup>
            <FooterSocialWrapper>
              <Facebook size="16" color="#0082F6" />
            </FooterSocialWrapper>
            <FooterSocialWrapper>
              <Twitter size="16" color="#00B2F4" />
            </FooterSocialWrapper>
            <FooterSocialWrapper>
              <Instagram size="16" color="#FA0083" />
            </FooterSocialWrapper>
            <FooterSocialWrapper>
              <Linkedin size="16" color="#103B78" />
            </FooterSocialWrapper>
          </FooterSocialGroup>
        </FooterWrapper>
      </Container>
    </>
  );
}
