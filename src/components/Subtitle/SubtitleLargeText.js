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
  width: 100px;
  fill: red;
`;

export default function SubtitleLargeText({ children, color, squiiglyImage }) {
  return (
    <>
      <SubtitleLargeTextStyled color={color}>
        {children}
      </SubtitleLargeTextStyled>
      <SquiglyImageStyled
        src={({ squiiglyImage }) => squiiglyImage || squiglyImagesDefault}
        alt=""
        srcset={({ squiiglyImage }) => squiiglyImage || squiglyImagesDefault}
      />
    </>
  );
}
