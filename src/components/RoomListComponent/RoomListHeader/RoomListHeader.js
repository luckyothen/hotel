import React from "react";
import styled from "styled-components";
import Container from "../../../components/Controls/Container/Container";

const StyledRoomListHeader = styled.header`
  background-image: linear-gradient(
    to right top,
    #9e5872,
    #9c587c,
    #975988,
    #905c93,
    #855f9e
  );

  padding: 3rem 0;
  margin-top: 2rem;
`;

const StyledTitleHeaderText = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 399;
`;

const StyledBreadCrumb = styled.div`
  color: #fff;
  margin-left: 4px;
  display: flex;
  align-items: center;

  p {
    margin-right: 1rem;
  }
`;

const StyledSubtitle = styled.p`
  color: #ffb300;
`;

function RoomListHeader({ pageTitle, propRef }) {
  return (
    <div ref={propRef}>
      <StyledRoomListHeader>
        <Container>
          <StyledTitleHeaderText>{pageTitle}</StyledTitleHeaderText>
          <StyledBreadCrumb>
            <p>Home</p>
            <p>/</p>
            <StyledSubtitle>{pageTitle}</StyledSubtitle>
          </StyledBreadCrumb>
        </Container>
      </StyledRoomListHeader>
    </div>
  );
}

const forwardedRefHeader = React.forwardRef(RoomListHeader);
export default forwardedRefHeader;
