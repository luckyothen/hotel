import React from "react";
import styled from "styled-components";
import Subtitle from "../Subtitle/Subtitle";
import Container from "../Controls/Container/Container";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import RoomCardOverviewList from "../RoomCardOverview/RoomCardOverviewList";

const FavoritesWrapper = styled.section`
  height: 100vh;
  padding: 5rem 0;
`;

export default function Favorites({ children }) {
  return (
    <FavoritesWrapper>
      <Container>
        <Subtitle>
          <SubtitleLargeText>OUR FAVORITE ROOMS</SubtitleLargeText>
          <SubtitleSmallText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </SubtitleSmallText>
          <RoomCardOverviewList />
        </Subtitle>
      </Container>
    </FavoritesWrapper>
  );
}
