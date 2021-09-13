import React from "react";
import styled from "styled-components";

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Subtitle({ children }) {
  return <SubtitleWrapper>{children}</SubtitleWrapper>;
}
