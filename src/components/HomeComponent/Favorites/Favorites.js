import React from "react";
import styled from "styled-components";
import Subtitle from "../Subtitle/Subtitle";
import Container from "../../Controls/Container/Container";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import RoomCardOverviewList from "../../RoomCardOverview/RoomCardOverviewList";
import Button from "../../Controls/Button/Button";

const FavoritesWrapper = styled.section`
  padding: 5rem 2rem;
  margin-bottom: 7rem;
`;

const RoomListButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0 0;
`;

export default function Favorites({ children }) {
  return (
    <FavoritesWrapper>
      <Container>
        <Subtitle>
          <SubtitleLargeText>OUR FAVORITE ROOMS</SubtitleLargeText>
          <SubtitleSmallText>
            Lore ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </SubtitleSmallText>
          <RoomCardOverviewList />
        </Subtitle>
        <RoomListButtonWrapper>
          <Button
            px=".6rem"
            py=".5rem"
            fontSize=".8rem"
            fontWeight="700"
            hover="hover"
          >
            View Room List
          </Button>
        </RoomListButtonWrapper>
      </Container>
    </FavoritesWrapper>
  );
}
