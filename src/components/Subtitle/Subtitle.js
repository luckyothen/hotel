import React from 'react';
import styled from 'styled-components';

const SubtitleWrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
`;


const SubtitleTextStyled = styled.h2`
  font-size: 2.3rem;
  font-weight:600;
  text-align: center;
  color: ${({ color }) => color || "#F8C11D"};
  text-transform: uppercase;
`;

const SquidlyStyled = styled.div`
  text-decoration-line: overline underline;
  text-decoration-style: wavy;
  height: 40px;
  width: 300px;
  color: ${({ color }) => color || "#F8C11D"};
  text-align: center;
  display: inline-block;
 
`;

export default function Subtitle({ children, color }) {
  return (
    <SubtitleWrapper>
      <SubtitleTextStyled color={color}>
        {children}
      </SubtitleTextStyled>
    </SubtitleWrapper>

  )
}
