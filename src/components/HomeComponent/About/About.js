import React from "react";
import styled from "styled-components";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import squiglyImage from "../../../assets/images/wave_white.svg";
import lobbyImage from "../../../assets/images/lobby.jpg";
import bedImage from "../../../assets/images/bed1.jpg";
import { device } from '../../../themes/MediaDefaults';


const AboutSectionStyled = styled.section`
  background-color: #00c3f9;
  padding: 5rem 6rem;
  
`;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content:center;       
  text-align: center;
  margin-top: 2rem;

  @media only screen and ${device.sm}{              
    display: block;    
  }
  
`;

const LobbyImageStyled = styled.img`
  position: absolute; 
  right:10%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: .5rem solid #39CDFF;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  display:block;
  top:2%;

  @media only screen and ${device.xs}{

     right:3%;
      width: 200px;
  height: 200px;
  }
`;

const BedImageStyled = styled(LobbyImageStyled)`
  right: 45%;      
  outline: .5rem solid #1DC2F8;
  display:block;
`;

const ImageWrapperStyled = styled.div`
  position: relative !important;
  height: 35vh;
  margin-left: 4rem;

   @media only screen and ${device.sm}{
     margin-left: 2rem;
     height: 50vh;
  }

   @media only screen and ${device.xs}{
     margin-left: 2rem;
     height: 35vh;
  }
   
`;

export default function About() {
  return (
    <AboutSectionStyled>

      <AboutWrapper>
        <ImageWrapperStyled>
          <LobbyImageStyled srcSet={lobbyImage} />
          <BedImageStyled srcSet={bedImage} />
        </ImageWrapperStyled>
        <div>
          <SubtitleLargeText squiglyImage={squiglyImage} textColor="#fff" alignLargeText="flex-start">
            ZAKYNTHOS - ZANTE
          </SubtitleLargeText>
          <SubtitleSmallText alignment="left" textColor="#fff">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
            tation ullamcorper suscipit.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit.
          </SubtitleSmallText>
          <SubtitleSmallText alignment="left" textColor="#fff">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
            tation ullamcorper suscipit.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </SubtitleSmallText>
        </div>
      </AboutWrapper>
    </AboutSectionStyled>
  );
}
