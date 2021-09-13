import React from "react";
import styled from "styled-components";

const SubtitleSmallTextStyled = styled.p`
  font-size: 1rem;
  color: #9db1c1;
  text-align: ${({ alignment }) => alignment || "center"};
  margin: 2rem 0;
`;

export default function SubtitleSmallText({ children, alignment }) {
  return (
    <SubtitleSmallTextStyled alignment={alignment}>
      {children}
    </SubtitleSmallTextStyled>
  );
}
