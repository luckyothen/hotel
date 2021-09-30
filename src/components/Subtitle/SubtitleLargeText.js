import React from "react";
import styled from "styled-components";
import squiglyImagesDefault from "../../assets/images/wave_yellow.svg";

const SubtitleLargeTextStyled = styled.h2`
  font-size: 2.3rem;
  font-weight: 600;
  text-align: center;
  color: ${({ color }) => color || "#F8C11D"};
  text-transform: uppercase;
`;

const SquiglyImageStyled = styled.img`
  width: 60px;
  fill: red;
  opacity: 0.7;
`;

export default function SubtitleLargeText({ children, color, squiglyImage }) {
  let squigImg = squiglyImage || squiglyImagesDefault;

  return (
    <>
      <SubtitleLargeTextStyled color={color}>
        {children}
      </SubtitleLargeTextStyled>
      <SquiglyImageStyled srcSet={squigImg} alt="Waves" />
    </>
  );
}
