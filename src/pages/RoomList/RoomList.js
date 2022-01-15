import React from 'react'
import ContactTopBar from '../../components/RoomListComponent/ContactTopBar/ContactTopBar';
import Nav from '../../components/Shared/Nav/Nav';
import RoomListHeader from '../../components/RoomListComponent/RoomListHeader/RoomListHeader';
import styled from 'styled-components';
import Container from '../../components/Controls/Container/Container';
import room1 from "../../assets/images/room.jpg";
import { CupFill } from "@styled-icons/bootstrap/CupFill";
import { SpoonKnife } from "@styled-icons/icomoon/SpoonKnife";
import { Tv } from "@styled-icons/bootstrap/Tv";


const StyledRooms = styled.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 6rem 0; 
`;

const StyledRoom = styled.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:1.5rem;
  width: 550px;
  
  margin-bottom:1.5rem;
  background-color: #F5F5F5;
  border: 1px solid #F5F5F5;
   
  & > *{
    color: #A1BAD2;
  }
  
`;

const StyledContainerIcons = styled.div`
  display:flex;
  gap:1rem;
  margin-top: .8rem;
  margin-bottom: .8rem;
`;

const StyledWrapperIcon = styled.div`
  padding: .5rem .7rem;
  border-radius: 3px;
  background-color: #ffb300;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const StyledRoomImage = styled.img`
  width:100%;
  height: 100%; 
   object-fit: cover;

   &::before{
     content: '*';
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     width: 100%;
     height: 100%;
     opacity: .7;
     background-color: #A1BAD2;
   }

`;

const StyledRoomTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
`;

const StyledRoomTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
`;

const StyledRoomText = styled.div`
 padding-right: .5rem;
  padding-top: .5rem;
`;

function RoomList() {
  return (
    <>
      <ContactTopBar />
      <Nav position="static"
        brandingTextColor="#1DC1F8"
        navBackgroundColor="#fff"
        isInview="false"
        linkColor="#A1B1C1"
        arrowDownIconColor="#A1B1C1"
      />
      <RoomListHeader pageTitle="Rooms" />
      <Container>
        <StyledRooms>
          <StyledRoom>
            <StyledRoomImage src={room1} alt="" />
            <StyledRoomText>
              <StyledRoomTitleContainer>
                <StyledRoomTitle>Single Room</StyledRoomTitle>
                <p>€89 / night</p>
              </StyledRoomTitleContainer>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad culpa non facere beatae minima fugit, eaque voluptates explicabo aut sint?</p>

              <StyledContainerIcons>
                <StyledWrapperIcon><CupFill size="16" /></StyledWrapperIcon>
                <StyledWrapperIcon><SpoonKnife size="16" /></StyledWrapperIcon>
                <StyledWrapperIcon><Tv size="16" /></StyledWrapperIcon>
              </StyledContainerIcons>
            </StyledRoomText>
          </StyledRoom>
          <StyledRoom>
            <StyledRoomImage src={room1} alt="" />
            <StyledRoomText>
              <StyledRoomTitleContainer>
                <StyledRoomTitle>Single Room</StyledRoomTitle>
                <p>€89 / night</p>
              </StyledRoomTitleContainer>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad culpa non facere beatae minima fugit, eaque voluptates explicabo aut sint?</p>
            </StyledRoomText>
          </StyledRoom>
        </StyledRooms>
      </Container>
    </>
  )
}

export default RoomList
