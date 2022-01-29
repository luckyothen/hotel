import React from "react";
import styled from "styled-components";
import RoomCardOverviewSingle from "./RoomCardOverviewSingle";
import { device } from "../../themes/MediaDefaults";

const RoomCardOverviewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media only screen and ${device.sm} {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const data = [
  { text: "Single Bed", image: "assets/images/single.jpg" },
  { text: "Double Bed", image: "assets/images/double.jpg" },
  { text: "Deluxe Bed", image: "assets/images/deluxe.jpg" },
];

const overview = data.map((dt, index) => {
  return (
    <RoomCardOverviewSingle image={dt.image} key={index}>
      {dt.text}
    </RoomCardOverviewSingle>
  );
});

export default function RoomCardOverviewList() {
  return <RoomCardOverviewWrapper>{overview}</RoomCardOverviewWrapper>;
}
