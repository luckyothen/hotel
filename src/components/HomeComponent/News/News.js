import React from "react";
import styled from "styled-components";
import Container from "../../Controls/Container/Container";
import Subtitle from "../Subtitle/Subtitle";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import NewsArticlesList from "./NewsArticlesList";

const NewsWrapperStyled = styled.div`
  padding: 5rem 2rem;
`;

export default function News() {
  return (
    <NewsWrapperStyled>
      <Container>
        <Subtitle>
          <SubtitleLargeText>LATEST NEWS & EVENTS</SubtitleLargeText>
          <SubtitleSmallText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </SubtitleSmallText>
        </Subtitle>
        <NewsArticlesList />
      </Container>
    </NewsWrapperStyled>
  );
}
