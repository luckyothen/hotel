import React from "react";
import styled from "styled-components";
import NewsArticle from "./NewsArticle";

const NewsArticlesWrapperStyled = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  color: #9db1c1;
`;

const data = [
  {
    title: "Live your myth in Greece",
    text: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore...",
    image: "assets/images/greece.jpg",
    date: "August 21, 2021",
    user: "JOHN DOE",
  },
  {
    title: "Live your myth in Greece",
    text: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore...",
    image: "assets/images/greece.jpg",
    date: "August 21, 2021",
    user: "JOHN DOE",
  },
  {
    title: "Live your myth in Greece",
    text: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore...",
    image: "assets/images/greece.jpg",
    date: "August 21, 2021",
    user: "JOHN DOE",
  },
  {
    title: "Live your myth in Greece",
    text: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore...",
    image: "assets/images/greece.jpg",
    date: "August 21, 2021",
    user: "JOHN DOE",
  },
  {
    title: "Live your myth in Greece",
    text: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore...",
    image: "assets/images/greece.jpg",
    date: "August 21, 2021",
    user: "JOHN DOE",
  },
  {
    title: "Live your myth in Greece",
    text: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, seddiam nonummy nibh euismod tincidunt ut laoreet dolore...",
    image: "assets/images/greece.jpg",
    date: "August 21, 2021",
    user: "JOHN DOE",
  },
];

const newsArticles = data.map((dt) => {
  return (
    <NewsArticle
      image={dt.image}
      title={dt.title}
      text={dt.text}
      user={dt.user}
      date={dt.date}
    />
  );
});

export default function NewsArticlesList() {
  return <NewsArticlesWrapperStyled>{newsArticles}</NewsArticlesWrapperStyled>;
}
