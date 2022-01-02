import React from 'react';
import styled, { css } from 'styled-components';
import { StarFill } from "@styled-icons/bootstrap/StarFill";

const BrandingStyled = styled.h1`
  font-size: ${({ fontSize }) => fontSize || "2rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  text-transform: uppercase;
  color: ${({ color }) => color || "#fff"};
`;

const StarsWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 28px;
  right: 0;
`;

const StarIcon = styled(StarFill)`
  color: #ffb300;
  &:not(:last-of-type) {
    margin-right: 0.1rem;
  }
`;

const BrandingWrapper = styled.div`
  position: relative;
  display: inline-block;

  ${({ marginBottom }) => marginBottom && css`
  	margin-bottom: ${marginBottom};	 
  `}`;


export default function Branding({ children, fontSize, fontWeight, color, marginBottom }) {
	return (
		<BrandingWrapper marginBottom={marginBottom}>
			<BrandingStyled fontSize={fontSize} fontWeight={fontWeight} color={color}>
				{children}
			</BrandingStyled>
			<StarsWrapper>
				<StarIcon size="7" />
				<StarIcon size="7" />
				<StarIcon size="7" />
				<StarIcon size="7" />
				<StarIcon size="7" />
			</StarsWrapper>
		</BrandingWrapper>

	)
}
