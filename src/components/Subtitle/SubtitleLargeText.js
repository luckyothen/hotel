import React from "react";
import styled from "styled-components";
import squiglyImagesDefault from "../../assets/images/wave_yellow.svg";

const SubtitleLargeTextStyled = styled.h2`
  display: inline-block;
  font-size: 2.3rem;
  font-weight: 600;
  text-align: ${({ alignLargeText }) => alignLargeText || "center"};
  color: ${({ color }) => color || "#F8C11D"};
  text-transform: uppercase;
`;

const SquiglyImageStyled = styled.img`
  width: 60px;
  fill: red;
  opacity: 0.7;
`;

export default function SubtitleLargeText({ children, color, squiglyImage, alignLargeText }) {
  let squigImg = squiglyImage || squiglyImagesDefault;

  return (
    <>
      <SubtitleLargeTextStyled color={color} alignLargeText={alignLargeText}>
        {children}
      </SubtitleLargeTextStyled>
      <SquiglyImageStyled srcSet={squigImg} alt="Waves" />
    </>
  );
}
