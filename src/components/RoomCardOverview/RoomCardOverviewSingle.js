import React from "react";
import styled from "styled-components";
import Button from "../Controls/Button/Button";

const RoomCardOverviewSingleStyled = styled.div`
  background-color: #fafafa;
  border: 1px solid #edf9f9;
`;

const ImageRoomStyled = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

const CaptionStyled = styled.h3`
  padding: 0.5rem;
  color: #9db1c1;
  font-size: 1.5rem;
  font-weight: 400;
`;

const CaptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function RoomCardOverviewSingle({ children, image }) {
  return (
    <RoomCardOverviewSingleStyled>
      <ImageRoomStyled srcSet={image} alt="Bed Room Style" />
      <CaptionWrapper>
        <CaptionStyled>{children}</CaptionStyled>
        <Button bgColor="#1DC1F8" px=".2rem" py=".4rem" fontSize=".9rem">
          Book A Room
        </Button>
      </CaptionWrapper>
    </RoomCardOverviewSingleStyled>
  );
}
