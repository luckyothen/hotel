import React from "react";
import styled from "styled-components";
import squiglyImages from "../../assets/images/wave.svg";

const SubtitleLargeTextStyled = styled.h2`
  font-size: 2.3rem;
  font-weight: 600;
  text-align: center;
  color: ${({ color }) => color || "#F8C11D"};
  text-transform: uppercase;
  &::after {
    background: url(${squiglyImages}) bottom;
  }
`;

const SquiglyImageStyled = styled.img`
  width: 100px;
  fill: red;
  color: red;
  background-color: red;
`;

export default function SubtitleLargeText({ children, color }) {
  return (
    <>
      <SubtitleLargeTextStyled color={color}>
        {children}
      </SubtitleLargeTextStyled>
      <SquiglyImageStyled src={squiglyImages} alt="" srcset={squiglyImages} />
    </>
  );
}
