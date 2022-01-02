import React from "react";
import styled from "styled-components";
import Button from "../../Controls/Button/Button";
import { User } from "@styled-icons/boxicons-solid/User";
import { Calendar } from "@styled-icons/ionicons-outline/Calendar";
import { CommentDetail } from "@styled-icons/boxicons-regular/CommentDetail";
import { device } from "../../../themes/MediaDefaults";

const NewsArticleWrapperStyled = styled.div`
  display: flex;
  border: 1px solid #edf9f9;
  background-color: #f6f7fb;

  @media only screen and ${device.sm} {
    margin-bottom: 2rem;
  }

  @media only screen and ${device.xs} {
    flex-direction: column;
    align-items: center;

    & > * {
      width: 100% !important;
    }
  }

  & > *:first-child {
    width: 35%;
  }

  & > *:last-of-type {
    width: 65%;
    padding: 0.5rem 1rem 1rem 1.7rem;
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
  gap: 0.9rem;
  align-items: center;
`;

const NewsArticleIconLinkStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  & > p {
    font-size: 0.8rem !important;
    text-transform: uppercase;
  }

  &:hover {
    cursor: pointer;
    color: #8db4d3;
  }

  @media only screen and ${device.sm} {
    flex-direction: column;
    text-align: center;
  }
`;

const TouristSpotImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default function NewsArticle({ title, user, date, image, text }) {
  return (
    <NewsArticleWrapperStyled>
      <div>
        <TouristSpotImageStyled srcSet={image} />
      </div>
      <div>
        <NewsArticleTitleStyled>{title}</NewsArticleTitleStyled>
        <NewsArticleTextStyled>{text}</NewsArticleTextStyled>
        <Button
          px=".6rem"
          py=".5rem"
          fontSize=".7rem"
          fontWeight="700"
          bgColor="#1DC1F8"
          hover="hover"
        >
          Read More
        </Button>
        <NewsArticleIconGroupStyled>
          <NewsArticleIconLinkStyled>
            <User size="14" />
            <p>{user}</p>
          </NewsArticleIconLinkStyled>
          <NewsArticleIconLinkStyled>
            <Calendar size="14" />
            <p>{date}</p>
          </NewsArticleIconLinkStyled>
          <NewsArticleIconLinkStyled>
            <CommentDetail size="14" />
            <p>COMMENTS</p>
          </NewsArticleIconLinkStyled>
        </NewsArticleIconGroupStyled>
      </div>
    </NewsArticleWrapperStyled>
  );
}
