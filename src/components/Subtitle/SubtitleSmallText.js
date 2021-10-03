import React from "react";
import styled from "styled-components";

const SubtitleSmallTextStyled = styled.p`
  font-size: 1rem;
  color: ${({ textColor }) => textColor || "#9db1c1"};
  text-align: ${({ alignment }) => alignment || "center"};
  margin: 2rem 0 1.5rem 0;
`;

export default function SubtitleSmallText({ children, alignment, textColor }) {
  return (
    <SubtitleSmallTextStyled alignment={alignment} textColor={textColor}>
      {children}
    </SubtitleSmallTextStyled>
  );
}
