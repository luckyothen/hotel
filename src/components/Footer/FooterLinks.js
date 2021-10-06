import React from 'react';
import styled, { css } from 'styled-components';

const FooterLinksWrapperStyled = styled.div`
text-align: left !important;
 

`;

const FooterLinkListTitleStyled = styled.h3`
 margin-bottom: 1.2rem;
color: #A1B1C4;
font-size: 1.5rem;
text-transform: uppercase;
transition: .2s all ease-in-out;

`;

const FooterLinkStyled = styled.li`
	font-size: 1.2;
	 margin-bottom: 1rem;

	${({ hover }) => hover && css`

	&:hover{
		cursor: pointer;
		color: #1DC1F8;
	}		
	`}

`;

const FooterLinkGroupStyled = styled.ul`
	color: ${({ linkColor }) => linkColor || "#929292"} !important;
`;

export default function FooterLinks({ title, links, linkColor, hover }) {
	const linkData = links.map(link => (<FooterLinkStyled hover={hover}>{link}</FooterLinkStyled>))

	return (
		<FooterLinksWrapperStyled>
			<FooterLinkListTitleStyled>
				{title}
			</FooterLinkListTitleStyled>
			<FooterLinkGroupStyled linkColor={linkColor}>
				{linkData}
			</FooterLinkGroupStyled>
		</FooterLinksWrapperStyled>
	)
}
