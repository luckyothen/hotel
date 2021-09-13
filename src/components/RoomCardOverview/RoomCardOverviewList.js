import React from "react";
import styled from "styled-components";
import RoomCardOverviewSingle from "./RoomCardOverviewSingle";

const RoomCardOverviewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const data = [
  { text: "Single Bed", image: "assets/images/single.jpg" },
  { text: "Double Bed", image: "assets/images/double.jpg" },
  { text: "Deluxe Bed", image: "assets/images/deluxe.jpg" },
];

const overview = data.map((dt) => {
  return (
    <RoomCardOverviewSingle image={dt.image}>{dt.text}</RoomCardOverviewSingle>
  );
});

export default function RoomCardOverviewList() {
  return <RoomCardOverviewWrapper>{overview}</RoomCardOverviewWrapper>;
}
