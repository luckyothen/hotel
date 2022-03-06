import React from "react";
import styled from "styled-components";
import Container from "../../Controls/Container/Container";
import Branding from "../Branding/Branding";
import FooterLinks from "./FooterLinks";
import { CaretRightFill } from "@styled-icons/bootstrap/CaretRightFill";
import { Location } from "@styled-icons/icomoon/Location";
import { Envelope } from "@styled-icons/bootstrap/Envelope";
import { Telephone } from "@styled-icons/bootstrap/Telephone";
import { device } from "../../../themes/MediaDefaults";

const FooterStyled = styled.footer`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const FooterWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 2fr;
  gap: 3rem;
  justify-self: start;

  & > *:not(:first-child) {
    color: #929292;
  }

  @media only screen and ${device.sm} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FooterLinkGroupStyled = styled.div`
  padding: 1rem;
`;

const FooterTextAboutStyled = styled.p`
  margin-bottom: 1rem;
  color: #77777f;
`;

const SmallTextStyled = styled.small`
  font-size: 0.7rem;
  opacity: 0.8;
`;

const LatestNewsLinkWrapper = styled.div`
  line-height: 1.3;
`;

const AboutUsLinkWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const latestNewsData = [
  {
    title: "Live your myth in Greece",
    date: "AUGUST 13, 2017",
  },
  {
    title: "Hotel Zante in pictures",
    date: "AUGUST 17, 2017",
  },
  {
    title: "Hotel Zante family party",
    date: "AUGUST 23, 2017",
  },
];

const aboutUsData = [
  "About Us",
  "Contact Us",
  "History",
  "Gallery",
  "Location",
];

const contactUsData = [
  {
    title: "25, Navagio Zakynthos, Greece",
    icon: <Location size="13" />,
  },
  {
    title: "Email: contact@site.com",
    icon: <Envelope size="13" />,
  },
  {
    title: "Phone: 800 123 3456",
    icon: <Telephone size="13" />,
  },
];

const latestNewsDataComponents = latestNewsData.map((latestNews, index) => (
  <LatestNewsLinkWrapper key={index}>
    <p>{latestNews.title}</p>
    <SmallTextStyled>{latestNews.date}</SmallTextStyled>
  </LatestNewsLinkWrapper>
));

const aboutUsComponents = aboutUsData.map((aboutus, index) => (
  <AboutUsLinkWrapper key={index}>
    <CaretRightFill size="13" />
    <p>{aboutus}</p>
  </AboutUsLinkWrapper>
));

const contactUsWrapper = contactUsData.map((contactus, index) => (
  <AboutUsLinkWrapper key={index}>
    <span>{contactus.icon}</span>
    <p>{contactus.title}</p>
  </AboutUsLinkWrapper>
));

export default function Footer() {
  return (
    <FooterStyled>
      <Container>
        <FooterWrapperStyled>
          <FooterLinkGroupStyled>
            <Branding color="#1DC1F8" marginBottom="1rem">
              Zogo Hotel
            </Branding>
            <FooterTextAboutStyled>
              Lore ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </FooterTextAboutStyled>
            <FooterTextAboutStyled>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip.
            </FooterTextAboutStyled>
          </FooterLinkGroupStyled>
          <FooterLinkGroupStyled>
            <FooterLinks
              title="Latest News"
              links={latestNewsDataComponents}
              hover="hover"
            />
          </FooterLinkGroupStyled>
          <FooterLinkGroupStyled>
            <FooterLinks
              title="Useful Links"
              links={aboutUsComponents}
              hover="hover"
            />
          </FooterLinkGroupStyled>
          <FooterLinkGroupStyled>
            <FooterLinks title="CONTACT US" links={contactUsWrapper} />
          </FooterLinkGroupStyled>
        </FooterWrapperStyled>
      </Container>
    </FooterStyled>
  );
}
