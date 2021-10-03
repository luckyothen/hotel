import React from "react";
import styled from "styled-components";
import Container from "../Controls/Container/Container";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import squiglyImage from "../../assets/images/wave_white.svg";
import lobbyImage from "../../assets/images/lobby.jpg";
import bedImage from "../../assets/images/bed1.jpg";


const AboutSectionStyled = styled.section`
  background-color: #00c3f9;
  padding: 5rem 2rem;
`;

const AboutWrapper = styled.div`
  display: flex;

  & > * {
    width: 50%;
 
  }

   & > *:first-child {
    display: flex;
    align-items: center;
    position: relative;
  }

  
`;

const LobbyImageStyled = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: .5rem solid #39CDFF;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;


`;

const BedImageStyled = styled(LobbyImageStyled)`
  margin-left: -70px;
   outline: .5rem solid #1DC2F8;
     box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

   
`;


export default function About() {
  return (
    <AboutSectionStyled>

      <AboutWrapper>
        <div>
          <LobbyImageStyled srcSet={lobbyImage} />
          <BedImageStyled srcSet={bedImage} />
        </div>
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
