import React from "react";
import styled from "styled-components";
import Container from "../Controls/Container/Container";
import Subtitle from "../Subtitle/Subtitle";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import Button from "../Controls/Button/Button";
import { Location } from "@styled-icons/icomoon/Location";
import { Telephone } from "@styled-icons/bootstrap/Telephone";
import { Envelope } from "@styled-icons/bootstrap/Envelope";
import GoogleMapReact from "google-map-react";
import { LocationArrow } from "@styled-icons/typicons/LocationArrow";
import { device } from '../../themes/MediaDefaults';

const ContactSectionStyled = styled.section`
  padding: 5rem 2rem;
`;

const ContactWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;
  gap: 2rem;

    @media only screen and ${device.sm}{
    grid-template-columns: 1fr;
     width: 100%;
  }
`;

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: block;
  width: 100%;
`;

const InputStyled = styled.input`
  border: 1px solid #dfdfdf;
  background-color: #fcfcfc;
  height: 52px;
  margin-bottom: 15px;
  display: block;
  width: 100%;
  padding: 1rem;
  outline: none;
  border-radius: 1px;

  &::placeholder {
    color: #939393;
  }
`;

const TextAreaStyled = styled.textarea`
  min-height: 158px;
  border: 1px solid #dfdfdf;
  background-color: #fcfcfc;
  height: 52px;
  margin-bottom: 15px;
  display: block;
  width: 100%;
  padding: 1rem;
  outline: none;
  border-radius: 1px;

  &::placeholder {
    color: #939393;
  }
`;

const BadgesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;

    @media only screen and ${device.sm}{
    flex-direction: column;
     width: 100%;
  }
`;

const BadgesText = styled.p`
  margin-left: 0.3rem;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
`;

const ButtonWrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
`;

const defaultLocation = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

const ContactButtonStyled = styled(Button)`
    @media only screen and ${device.sm}{
    background-color: red;
     width: 100% !important;
  }
`;

const SubtitleStyled = styled(Subtitle)`
  text-align: center;
  margin: auto;

`


export default function Contact() {
  return (
    <ContactSectionStyled>
      <Container>
        <SubtitleStyled>
          <SubtitleLargeText>OUR AWESOME SERVICES</SubtitleLargeText>
          <SubtitleSmallText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </SubtitleSmallText>
        </SubtitleStyled>
        <ContactWrapperStyled>
          <div style={{ height: "100%", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDA0V0k_ITQeGu6lJH3PoUM8OLYmjG4KS4",
              }}
              defaultCenter={defaultLocation.center}
              defaultZoom={defaultLocation.zoom}
            ></GoogleMapReact>
          </div>
          <FormStyled>
            <BadgesStyled>
              <ContactButtonStyled
                fontWeight="600"
                fontSize=".8rem"
                py=".5rem"
                px="2rem"
                type="button"
                responsive="responsive"
              >
                <Location size="14" />
                <BadgesText>Navagio Zakynthos</BadgesText>
              </ContactButtonStyled>
              <ContactButtonStyled
                fontWeight="600"
                fontSize=".8rem"
                py=".5rem"
                px="1rem"
                type="button"
                responsive="responsive"
              >
                <Telephone size="14" />
                <BadgesText>1-888-123-4567</BadgesText>
              </ContactButtonStyled>
              <ContactButtonStyled
                fontWeight="600"
                fontSize=".8rem"
                py=".5rem"
                px="1rem"
                type="button"
                responsive="responsive"
              >
                <Envelope size="14" />
                <BadgesText>contact@site.com</BadgesText>
              </ContactButtonStyled>
            </BadgesStyled>
            <InputStyled type="text" placeholder="Your Name" />
            <InputStyled type="email" placeholder="Your Email" />
            <TextAreaStyled placeholder="Your Message"></TextAreaStyled>
            <Button bgColor="#1DC1F8" py="1rem" width="100%" hover="hover">
              <ButtonWrapperText>
                <LocationArrow size="23" /> <p>Send Message</p>
              </ButtonWrapperText>
            </Button>
          </FormStyled>
        </ContactWrapperStyled>
      </Container>
    </ContactSectionStyled>
  );
}
