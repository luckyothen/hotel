import React from "react";
import styled from "styled-components";
import Button from "../Controls/Button/Button";
import { Link45deg } from "@styled-icons/bootstrap/Link45deg";

const RoomCardOverviewSingleStyled = styled.div`
  background-color: #fafafa;
  border: 1px solid #edf9f9;
`;

const ImageOverlayStyled = styled.div`
  opacity: 0;
  background-color: #00c3f9;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 98%;
  width: 100%;
  transition: 0.2s all ease-in-out;
  z-index: 3;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const ImageWrapperStyled = styled.div`
  position: relative;
`;

const ImageRoomStyled = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

const CaptionStyled = styled.h3`
  color: #9db1c1;
  font-size: 1.5rem;
  font-weight: 500;
`;

const CaptionWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const LinkChainStyled = styled(Link45deg)`
  color: #fff;
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2222;
  opacity: 1 !important;
`;

const PriceRoomTagStyled = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  background-color: #444444;
  padding: 0.5rem 0.9rem;
  border-bottom-right-radius: 5px;
  border-bottom: #fff solid 1px;
  z-index: 10;
  font-size: 0.9rem;
`;

export default function RoomCardOverviewSingle({ children, image }) {
  return (
    <RoomCardOverviewSingleStyled>
      <ImageWrapperStyled>
        <ImageRoomStyled srcSet={image} alt="Bed Room Style" />
        <PriceRoomTagStyled>$123 / night</PriceRoomTagStyled>
        <ImageOverlayStyled>
          <LinkChainStyled size="43" />
        </ImageOverlayStyled>
      </ImageWrapperStyled>

      <CaptionWrapper>
        <CaptionStyled>{children}</CaptionStyled>
        <Button
          bgColor="#1DC1F8"
          px=".6rem"
          py=".5rem"
          fontSize=".8rem"
          fontWeight="700"
          hover="hover"
        >
          View Details
        </Button>
      </CaptionWrapper>
    </RoomCardOverviewSingleStyled>
  );
}
