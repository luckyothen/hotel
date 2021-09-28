import React from "react";
import styled from "styled-components";
import Container from "../Controls/Container/Container";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";

const AboutSectionStyled = styled.section`
  background-color: #00c3f9;
  padding: 5rem 0;
`;

const AboutWrapper = styled.div`
  display: flex;

  & > * {
    width: 90%;
  }
`;

export default function About() {
  return (
    <AboutSectionStyled>
      <Container>
        <AboutWrapper>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse modi
            perspiciatis maiores architecto libero delectus recusandae neque
            qui, porro laborum!
          </div>
          <div>
            <SubtitleLargeText>ZAKYNTHOS - ZANTE</SubtitleLargeText>
            <SubtitleSmallText>
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
          </div>
        </AboutWrapper>
      </Container>
    </AboutSectionStyled>
  );
}
