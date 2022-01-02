import React from "react";
import styled from "styled-components";
import squiglyImagesDefault from "../../../assets/images/wave_yellow.svg";

const SubtitleLargeTextStyled = styled.h2`
  display: inline-block;
  font-size: 2.3rem;
  font-weight: 600;
  text-align: center;
 
  color: ${({ textColor }) => textColor || "#F8C11D"};
  text-transform: uppercase;
`;

const SquiglyImageStyled = styled.img`
  width: 60px;
  fill: red;
  opacity: 0.7;
`;

const SubtitleWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items:  ${({ alignLargeText }) => alignLargeText || "center"};
  
`;

export default function SubtitleLargeText({ children, textColor, squiglyImage, alignLargeText }) {
  let squigImg = squiglyImage || squiglyImagesDefault;

  return (
    <SubtitleWrapperStyled alignLargeText={alignLargeText}>
      <SubtitleLargeTextStyled textColor={textColor} >
        {children}
      </SubtitleLargeTextStyled>
      <SquiglyImageStyled srcSet={squigImg} alt="Waves" />
    </SubtitleWrapperStyled>
  );
}
