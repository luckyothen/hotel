import React from 'react';
import styled from 'styled-components';
import Container from '../Controls/Container/Container';
import Subtitle from '../Subtitle/Subtitle';
import SubtitleLargeText from '../Subtitle/SubtitleLargeText';
import SubtitleSmallText from '../Subtitle/SubtitleSmallText';

const NewsWrapperStyled = styled.div`
	padding: 5rem 0;
`;

const NewsArticleWrapperStyled = styled.article`
display: flex;

& > * {
	width: 50%;
}

`;

export default function News() {
	return (
		<NewsWrapperStyled>
			<Container>
				<Subtitle>
					<SubtitleLargeText>LATEST NEWS & EVENTS
					</SubtitleLargeText>
					<SubtitleSmallText>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
						ullamcorper suscipit.
					</SubtitleSmallText>
				</Subtitle>
				<NewsArticleWrapperStyled>
					<article>

					</article>
				</NewsArticleWrapperStyled>
			</Container>
		</NewsWrapperStyled>
	)
}
