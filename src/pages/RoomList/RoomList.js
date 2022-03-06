import React from "react";
import styled from "styled-components";
import Container from "../../components/Controls/Container/Container";
import RoomListMainHeader from "../../components/RoomListComponent/RoomListMainHeader/RoomListMainHeader";
import room1 from "../../assets/images/room.jpg";
import { CupFill } from "@styled-icons/bootstrap/CupFill";
import { SpoonKnife } from "@styled-icons/icomoon/SpoonKnife";
import { Tv } from "@styled-icons/bootstrap/Tv";
import { Link45deg } from "@styled-icons/bootstrap/Link45deg";
import { device } from "../../themes/MediaDefaults";
import { Link } from "react-router-dom";

const StyledRooms = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 6rem 0;
  gap: 1rem;

  @media only screen and ${device.sm} {
    grid-template-columns: 1fr;
  }
`;

const StyledRoom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;

  margin-bottom: 3rem;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;

  & > * {
    color: #a1bad2;
  }

  @media only screen and ${device.sm} {
    width: 100%;
  }

  @media only screen and ${device.xs} {
    grid-template-columns: 1fr;
  }
`;

const StyledContainerIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;

  @media only screen and ${device.xs} {
    position: static;
  }
`;

const StyledWrapperIcon = styled.div`
  padding: 0.5rem 0.7rem;
  border-radius: 3px;
  background-color: #ffb300;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out all;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
`;

const StyledImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;

  z-index: 10;
  transition: all 0.2s ease-in-out;

  & > * {
    display: none;
  }

  &:hover {
    background-color: rgba(141, 180, 211, 0.8);
    cursor: pointer;
  }

  &:hover > * {
    display: block;
  }
`;

const StyledRoomImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 5;
`;

const StyledRoomTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StyledRoomTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
`;

const StyledRoomText = styled.div`
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  position: relative;
  @media only screen and ${device.xs} {
    padding: 0.5rem;
  }
`;

const StyledZoomImageIcon = styled(Link45deg)`
  position: absolute;
  top: 42%;
  left: 47%;
  color: #fff !important;
`;

function RoomList() {
  return (
    <>
      <RoomListMainHeader pageTitle="Room List" />
      <Container>
        <StyledRooms>
          <StyledRoom>
            <StyledImageWrapper>
              <Link to="/room">
                <StyledImageOverlay>
                  <StyledZoomImageIcon size="45" />
                </StyledImageOverlay>
                <StyledRoomImage src={room1} alt="" />
              </Link>
            </StyledImageWrapper>
            <StyledRoomText>
              <StyledRoomTitleContainer>
                <StyledRoomTitle>Single Room</StyledRoomTitle>
                <p>€89 / night</p>
              </StyledRoomTitleContainer>
              <p>
                Lore, ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa non facere beatae minima fugit, eaque voluptates explicabo
                aut sint?
              </p>
              <StyledContainerIcons>
                <StyledWrapperIcon>
                  <CupFill size="16" />
                </StyledWrapperIcon>
                <StyledWrapperIcon>
                  <SpoonKnife size="16" />
                </StyledWrapperIcon>
                <StyledWrapperIcon>
                  <Tv size="16" />
                </StyledWrapperIcon>
              </StyledContainerIcons>
            </StyledRoomText>
          </StyledRoom>
          <StyledRoom>
            <StyledImageWrapper>
              <Link to="/room">
                <StyledImageOverlay>
                  <StyledZoomImageIcon size="45" />
                </StyledImageOverlay>
                <StyledRoomImage src={room1} alt="" />
              </Link>
            </StyledImageWrapper>
            <StyledRoomText>
              <StyledRoomTitleContainer>
                <StyledRoomTitle>Single Room</StyledRoomTitle>
                <p>€89 / night</p>
              </StyledRoomTitleContainer>
              <p>
                Lore, ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa non facere beatae minima fugit, eaque voluptates explicabo
                aut sint?
              </p>
              <StyledContainerIcons>
                <StyledWrapperIcon>
                  <CupFill size="16" />
                </StyledWrapperIcon>
                <StyledWrapperIcon>
                  <SpoonKnife size="16" />
                </StyledWrapperIcon>
                <StyledWrapperIcon>
                  <Tv size="16" />
                </StyledWrapperIcon>
              </StyledContainerIcons>
            </StyledRoomText>
          </StyledRoom>
          <StyledRoom>
            <StyledImageWrapper>
              <StyledImageOverlay>
                <StyledZoomImageIcon size="45" />
              </StyledImageOverlay>
              <StyledRoomImage src={room1} alt="" />
            </StyledImageWrapper>
            <StyledRoomText>
              <StyledRoomTitleContainer>
                <StyledRoomTitle>Single Room</StyledRoomTitle>
                <p>€89 / night</p>
              </StyledRoomTitleContainer>
              <p>
                Lore, ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa non facere beatae minima fugit, eaque voluptates explicabo
                aut sint?
              </p>
              <StyledContainerIcons>
                <StyledWrapperIcon>
                  <CupFill size="16" />
                </StyledWrapperIcon>
                <StyledWrapperIcon>
                  <SpoonKnife size="16" />
                </StyledWrapperIcon>
                <StyledWrapperIcon>
                  <Tv size="16" />
                </StyledWrapperIcon>
              </StyledContainerIcons>
            </StyledRoomText>
          </StyledRoom>
          <StyledRoom>
            <StyledImageWrapper>
              <StyledImageOverlay>
                <StyledZoomImageIcon size="45" />
              </StyledImageOverlay>
              <StyledRoomImage src={room1} alt="" />
            </StyledImageWrapper>
            <StyledRoomText>
              <StyledRoomTitleContainer>
                <StyledRoomTitle>Single Room</StyledRoomTitle>
                <p>€89 / night</p>
              </StyledRoomTitleContainer>
              <p>
                Lore, ipsum dolor sit amet consectetur adipisicing elit. Ad
                culpa non facere beatae minima fugit, eaque voluptates explicabo
                aut sint?
              </p>
              <StyledContainerIcons>
                <StyledWrapperIcon>
                  <CupFill size="16" />
                </StyledWrapperIcon>
                <StyledWrapperIcon>
                  <SpoonKnife size="16" />
                </StyledWrapperIcon>
                <StyledWrapperIcon>
                  <Tv size="16" />
                </StyledWrapperIcon>
              </StyledContainerIcons>
            </StyledRoomText>
          </StyledRoom>
        </StyledRooms>
      </Container>
    </>
  );
}

export default RoomList;
