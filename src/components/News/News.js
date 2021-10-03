import React from "react";
import styled from "styled-components";
import Container from "../Controls/Container/Container";
import Subtitle from "../Subtitle/Subtitle";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import Button from "../Controls/Button/Button";
import { User } from "@styled-icons/boxicons-solid/User";
import { Calendar } from "@styled-icons/ionicons-outline/Calendar";
import { CommentDetail } from "@styled-icons/boxicons-regular/CommentDetail";
import greeceImage from "../../assets/images/greece.jpg";
import NewsArticlesList from "./NewsArticlesList";

const NewsWrapperStyled = styled.div`
  padding: 5rem 0;
`;

const NewsArticlesWrapperStyled = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  color: #9db1c1;
`;

const NewsArticleWrapperStyled = styled.div`
  display: flex;
  border: 1px solid #edf9f9;
  background-color: #f6f7fb;

  & > *:first-child {
    width: 40%;
  }

  & > *:last-of-type {
    width: 60%;
    padding: 1rem;
  }
`;

const NewsArticleTitleStyled = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
`;

const NewsArticleTextStyled = styled.p`
  margin-bottom: 1rem;
`;

const NewsArticleIconGroupStyled = styled.ul`
  margin-top: 2rem;
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

const NewsArticleIconLinkStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  & > p {
    font-size: 0.8rem !important;
  }

  &:hover {
    cursor: pointer;
    color: #8db4d3;
  }
`;

const TouristSpotImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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
