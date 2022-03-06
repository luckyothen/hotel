import React from "react";
import styled from "styled-components";
import Container from "../../Controls/Container/Container";
import Subtitle from "../Subtitle/Subtitle";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import houseMaidImage from "../../../assets/images/housemaid.jpg";
import { device } from "../../../themes/MediaDefaults";

const ServicesWrapperStyled = styled.section`
  background-color: #f5f5f5;
  padding: 5rem 2rem;
`;

const ServicesInformationWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;

  > * {
    width: 50%;
    height: 100%;
  }

  @media only screen and ${device.sm} {
    flex-direction: column;
    display: block;

    > * {
      width: 100%;
    }
  }
`;

const ServicesListItemTextStyled = styled.text`
  color: #a1b1c1;
`;

const ServicesListItemTitleStyled = styled.text`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 0.7rem;
`;

const ServicesIconStyled = styled.i`
  color: #f8c11d;
  text-align: center !important;

  &:before {
    font-size: 2.5rem;
  }
`;

const PointedDivStyled = styled.div`
  position: absolute;
  left: -18px;
  top: 45%;
  background-color: yellow;
  height: 10px;
  width: 10px;
  max-width: 10px;
  transform: rotate(45deg);
  background-color: #333333;
  display: none;
  transition: 5s all ease-in-out;

  @media only screen and ${device.lg} {
    display: none;
  }
`;

const ServicesListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
  background-color: #fff;
  padding: 1rem;
  transition: 0.2s all ease-in-out;

  > *:first-child {
    width: 15%;
  }

  > *:last-child {
    width: 85%;
  }

  &:hover {
    cursor: pointer;
    background-color: #333333;
  }

  &:hover > * {
    color: #fff;
  }

  &:hover ${PointedDivStyled} {
    display: block;
  }

  @media only screen and ${device.sm} {
    display: block;
    > * {
      width: 100%;
    }

    > *:first-child {
      width: 100%;
    }

    &:hover ${PointedDivStyled} {
      display: none;
    }
  }
`;

const ImageServicesStyled = styled.img``;

const IconWrapper = styled.div`
position: relative;
display: flex; 
justify-content: start;
align-items: start;
margin-right: 1rem;
  
     
 @media only screen and ${device.lg}{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

`;

const ServicesListGroup = styled.ul`
  @media only screen and ${device.lg}{
      margin-top: 2rem;
    }
  }

`;

export default function Services() {
  return (
    <ServicesWrapperStyled>
      <Container>
        <Subtitle>
          <SubtitleLargeText>OUR AWESOME SERVICES</SubtitleLargeText>
          <SubtitleSmallText>
            Lore ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </SubtitleSmallText>
        </Subtitle>

        <ServicesInformationWrapperStyled>
          <ImageServicesStyled src={houseMaidImage} alt="House Maid" />
          <ServicesListGroup>
            <ServicesListItemStyled>
              <IconWrapper>
                <PointedDivStyled />
                <ServicesIconStyled className="flaticon-food"></ServicesIconStyled>
              </IconWrapper>
              <ServicesListItemTextStyled>
                <ServicesListItemTitleStyled>
                  Restaurant
                </ServicesListItemTitleStyled>
                <p>
                  Lore ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </ServicesListItemTextStyled>
            </ServicesListItemStyled>
            <ServicesListItemStyled>
              <IconWrapper>
                <PointedDivStyled />
                <ServicesIconStyled className="flaticon-person"></ServicesIconStyled>
              </IconWrapper>
              <ServicesListItemTextStyled>
                <ServicesListItemTitleStyled>
                  Spa - Beauty & Health
                </ServicesListItemTitleStyled>
                <p>
                  Lore ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </ServicesListItemTextStyled>
            </ServicesListItemStyled>
            <ServicesListItemStyled>
              <IconWrapper>
                <PointedDivStyled />
                <ServicesIconStyled className="flaticon-business"></ServicesIconStyled>
              </IconWrapper>
              <ServicesListItemTextStyled>
                <ServicesListItemTitleStyled>
                  Conference Room
                </ServicesListItemTitleStyled>
                <p>
                  Lore ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </ServicesListItemTextStyled>
            </ServicesListItemStyled>
            <ServicesListItemStyled>
              <IconWrapper>
                <PointedDivStyled />
                <ServicesIconStyled className="flaticon-beach"></ServicesIconStyled>
              </IconWrapper>
              <ServicesListItemTextStyled>
                <ServicesListItemTitleStyled>
                  Swimming Pool
                </ServicesListItemTitleStyled>
                <p>
                  Lore ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </ServicesListItemTextStyled>
            </ServicesListItemStyled>
          </ServicesListGroup>
        </ServicesInformationWrapperStyled>
      </Container>
    </ServicesWrapperStyled>
  );
}
