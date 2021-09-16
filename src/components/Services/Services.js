import React from "react";
import styled from "styled-components";
import Container from "../Controls/Container/Container";
import Subtitle from "../Subtitle/Subtitle";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import houseMaidImage from "../../assets/images/housemaid.jpg";


const ServicesWrapperStyled = styled.section`
  background-color: #f5f5f5;
  padding: 5rem 0;
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
  text-align: center;
  margin-right: 0.3rem;

  &:before {
    font-size: 2.5rem;
  }
`;



const PointedDivStyled = styled.div`
  position:absolute;
  left: -3px;
  top: 45%;
  background-color: yellow ;
  height: 10px;
  width: 10px;
  max-width: 10px;  
  transform: rotate(45deg);
  background-color: #333333;
  display: none;
  transition: 5s all ease-in-out;
`;

const ServicesListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
  background-color: #fff;
  padding: 1rem;
  transition: 0.2s all ease-in-out;
  position: relative;
 

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

  
`;

const ImageServicesStyled = styled.img`
 
`;

export default function Services() {
  return (
    <ServicesWrapperStyled>
      <Container>
        <Subtitle>
          <SubtitleLargeText>OUR AWESOME SERVICES</SubtitleLargeText>
          <SubtitleSmallText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </SubtitleSmallText>
        </Subtitle>

        <ServicesInformationWrapperStyled>
          <ImageServicesStyled src={houseMaidImage} alt="House Maid" />
          <ul>
            <ServicesListItemStyled>
              <div>
                <PointedDivStyled />
                <ServicesIconStyled className="flaticon-food"></ServicesIconStyled>
              </div>
              <ServicesListItemTextStyled>
                <ServicesListItemTitleStyled>
                  Restaurant
                </ServicesListItemTitleStyled>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </ServicesListItemTextStyled>
            </ServicesListItemStyled>
            <ServicesListItemStyled>
              <div>
                <PointedDivStyled />
                <ServicesIconStyled className="flaticon-person"></ServicesIconStyled>
              </div>
              <ServicesListItemTextStyled>
                <ServicesListItemTitleStyled>
                  Spa - Beauty & Health
                </ServicesListItemTitleStyled>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </ServicesListItemTextStyled>
            </ServicesListItemStyled>
            <ServicesListItemStyled>
              <div>
                <PointedDivStyled />
                <ServicesIconStyled className="flaticon-business"></ServicesIconStyled>
              </div>
              <ServicesListItemTextStyled>
                <ServicesListItemTitleStyled>
                  Conference Room
                </ServicesListItemTitleStyled>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </ServicesListItemTextStyled>
            </ServicesListItemStyled>
            <ServicesListItemStyled>
              <div>
                <PointedDivStyled />
                <ServicesIconStyled className="flaticon-beach"></ServicesIconStyled>
              </div>
              <ServicesListItemTextStyled>
                <ServicesListItemTitleStyled>
                  CSwimming Pool
                </ServicesListItemTitleStyled>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </ServicesListItemTextStyled>
            </ServicesListItemStyled>
          </ul>
        </ServicesInformationWrapperStyled>
      </Container>
    </ServicesWrapperStyled>
  );
}
