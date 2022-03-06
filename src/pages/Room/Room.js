import React from "react";
import styled from "styled-components";
import Container from "../../components/Controls/Container/Container";
import RoomListMainHeader from "../../components/RoomListComponent/RoomListMainHeader/RoomListMainHeader";
import room1 from "../../assets/images/room.jpg";
import roomThumbnail from "../../assets/images/double.jpg";
import { ZoomIn } from "@styled-icons/bootstrap/ZoomIn";
import { Check } from "@styled-icons/bootstrap/Check";
import { Times } from "@styled-icons/fa-solid/Times";
import { device } from "../../themes/MediaDefaults";
import Button from "../../components/Controls/Button/Button";
import { ArrowheadRight } from "@styled-icons/evaicons-solid/ArrowheadRight";
import { TelephoneFill } from "@styled-icons/bootstrap/TelephoneFill";
import { Envelope } from "@styled-icons/bootstrap/Envelope";

const RoomWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 5rem 0;
  gap: 3rem;
`;

const MainImageWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 4px;
  position: relative;
  height: 600px;
  transition: all 0.2s ease-in-out;

  &:hover > * {
    background-color: rgba(141, 180, 211, 0.7);
    cursor: pointer;
  }
`;

const MainImageOverlay = styled.div`
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
  &:hover > * {
    display: block;
  }
`;

const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 3;
`;

const StyledZoomImageIcon = styled(ZoomIn)`
  position: absolute;
  top: 44%;
  left: 47%;
  color: #fff !important;
  z-index: 20;
  opacity: 0.6;
`;

const MultipleImagesWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
`;

const MultipleImageWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 4px;
  position: relative !important;
  &:hover > * {
    background-color: rgba(141, 180, 211, 0.7);
    cursor: pointer;
  }
`;

const MultipleImageStyled = styled.img`
  object-fit: cover;
  height: 100%;
  width: 120px;
`;

const RoomTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  color: #9fb0c2;
  margin-bottom: 1.5rem;
`;

const RoomDescriptionWrapper = styled.div`
  margin-bottom: 2rem;
`;

const RoomDescription = styled.p`
  color: #9fb0c2;
  margin-bottom: 1.2rem;
`;

const RoomServiceListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
`;

const RoomServiceList = styled.ul`
  list-style: none;
`;

const RoomServiceItem = styled.li`
  color: #9fb0c2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 0.3rem;

  @media only screen and ${device.sm} {
    flex-direction: column;
  }
`;

const CheckStyled = styled(Check)`
  color: #39a700 !important;
  font-weight: 800;
`;
const TimesStyled = styled(Times)`
  color: #ff344e !important;
  font-weight: 800;
  margin-right: 7px;
`;

const BookFormWrapper = styled.div`
  background-color: #fcfcfc;
  border: 1px solid #efeeee;
`;

const BookFormTitleWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BookFormTitle = styled.h2`
  color: #88959f;
  font-size: 1.6rem;
  font-weight: 800;
`;

const BookFormInputText = styled.input`
  border: 1px solid #e9e7e7;
  padding: 0.8rem;
  width: 100%;
  display: block;
  margin-bottom: 1.5rem;
  outline: none;
  color: #b6b6b6;

  &::placeholder {
    color: #d4d4d4;
  }

  &:focus {
    border-color: #d0cdcd;
  }
`;

const BoomFormSelect = styled.select`
  padding: 0.8rem;
  width: 100%;
  display: block;
  margin-bottom: 1.5rem;
  outline: none;
  color: #b6b6b6;

  & > * {
    border: 1px solid red;
  }

  &::placeholder {
    color: #d4d4d4;
  }
`;

const BookForm = styled.form`
  padding: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const SideMenuTitleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3.5rem;
`;

const StyledArrowHead = styled(ArrowheadRight)`
  color: #fff;
  font-weight: 300;
`;

const StyledIconWrapper = styled.div`
  background-color: #00bffc;
  padding: 0 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const SideMenuTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #585858;
  text-transform: uppercase;
`;

const SideMenuContactInformation = styled.div`
  padding: 1.5rem;
  background-color: #f7f2cc;
  margin-top: 1.5rem;
  border: thick double #d6cf95;
  color: #c8bd63;
`;

const StyledTelephoneFill = styled(TelephoneFill)`
  color: #c8bd63;
`;

const StyledEnvelopeFill = styled(Envelope)`
  color: #c8bd63;
`;

const SideMenuContactInformationWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  font-size: 0.5rem !important;
  margin-top: 0.4rem;
`;

const LatestPostLists = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LatestPostItem = styled.li`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
`;

const StyledRoomThumbail = styled(roomThumbnail)`
  width: 100px !important;
  height: 80px !important;
`;

const data = [
  { text: "Single Bed", image: "../../assets/images/single.jpg" },
  { text: "Double Bed", image: "../../assets/images/double.jpg" },
  { text: "Deluxe Bed", image: "../../assets/images/deluxe.jpg" },
];

const overview = data.map((dt, index) => {
  return (
    <MultipleImageWrapper>
      <MultipleImageStyled src={dt.image} key={index} alt={index} />
      <MainImageOverlay>
        {" "}
        <StyledZoomImageIcon size="15" />
      </MainImageOverlay>
    </MultipleImageWrapper>
  );
});

function Room() {
  return (
    <>
      <RoomListMainHeader pageTitle="Premium Room" />
      <Container>
        <RoomWrapper>
          <div>
            <MainImageWrapper>
              <MainImageOverlay>
                <StyledZoomImageIcon size="41" />
              </MainImageOverlay>
              <ImageStyled src={room1} />
            </MainImageWrapper>
            <MultipleImagesWrapper>{overview}</MultipleImagesWrapper>
            <RoomTitle>ABOUT HOTEL ZANTE</RoomTitle>
            <RoomDescriptionWrapper>
              <RoomDescription>
                Lorem ipsumo dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis
              </RoomDescription>
              <RoomDescription>
                at vero eros et accumsan et iusto odio dignissim qui blandit
                praesent luptatum zzril delenit augue duis dolore te feugait
                nulla facilisi. Nam liber tempor cum soluta nobis eleifend
                option congue nihil imperdiet doming id quod mazim placerat
                facer possim assum. Typi non habent claritatem insitam; est usus
                legentis in iis qui facit eorum claritatem. Investigationes
                demonstraverunt lectores legere me lius quod ii legunt saepius
              </RoomDescription>
              <RoomDescription>
                Lorem ipsumo dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </RoomDescription>
            </RoomDescriptionWrapper>
            <RoomTitle>ROOM SERVICES</RoomTitle>
            <RoomServiceListWrapper>
              <RoomServiceList>
                <RoomServiceItem>
                  <CheckStyled size="22" />
                  <p>Double Bed</p>
                </RoomServiceItem>
                <RoomServiceItem>
                  <CheckStyled size="22" />
                  <p>80 Sq mt</p>
                </RoomServiceItem>
                <RoomServiceItem>
                  <CheckStyled size="22" />
                  <p>6 Persons</p>
                </RoomServiceItem>
                <RoomServiceItem>
                  <CheckStyled size="22" />
                  <p>Free Internet</p>
                </RoomServiceItem>
              </RoomServiceList>
              <RoomServiceList>
                <RoomServiceItem>
                  <CheckStyled size="22" />
                  <p>Free Wi-Fi</p>
                </RoomServiceItem>
                <RoomServiceItem>
                  <CheckStyled size="22" />
                  <p>Breakfast Include</p>
                </RoomServiceItem>
                <RoomServiceItem>
                  <CheckStyled size="22" />
                  <p>Private Balcony</p>
                </RoomServiceItem>
                <RoomServiceItem>
                  <TimesStyled size="14" />
                  <p>Free Newspaper</p>
                </RoomServiceItem>
              </RoomServiceList>
              <RoomServiceList>
                <RoomServiceItem>
                  <CheckStyled size="22" />
                  <p>Flat Screen Tv</p>
                </RoomServiceItem>
                <RoomServiceItem>
                  <CheckStyled size="22" />
                  <p>Breakfast Include</p>
                </RoomServiceItem>
                <RoomServiceItem>
                  <TimesStyled size="14" />
                  <p>Private Balcony</p>
                </RoomServiceItem>
                <RoomServiceItem>
                  <TimesStyled size="14" />
                  <p>Free Newspaper</p>
                </RoomServiceItem>
              </RoomServiceList>
            </RoomServiceListWrapper>
          </div>
          <aside>
            <BookFormWrapper>
              <BookFormTitleWrapper>
                <BookFormTitle> BOOK ONLINE</BookFormTitle>
              </BookFormTitleWrapper>
              <BookForm action="">
                <BookFormInputText placeholder="Enter your name" />
                <BookFormInputText placeholder="Enter your address" />
                <BookFormInputText placeholder="Enter your phone number" />
                <BoomFormSelect>
                  <option value="Select">Room Type</option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                </BoomFormSelect>
                <InputWrapper>
                  <BoomFormSelect>
                    <option value="">Adults</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </BoomFormSelect>
                  <BoomFormSelect>
                    <option value="">Children</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                  </BoomFormSelect>
                </InputWrapper>
                <InputWrapper>
                  <BookFormInputText type="date" placeholder="Arrival Date" />
                  <BookFormInputText
                    type="date"
                    placeholder="Departure Date"
                    onBlur="Departure Date"
                  />
                </InputWrapper>
                <Button
                  bgColor="#00BFFC"
                  displayButton="block"
                  width="100%"
                  py="1rem"
                  hover="true"
                >
                  Book A Room Now
                </Button>
              </BookForm>
            </BookFormWrapper>
            <SideMenuTitleWrapper>
              <StyledIconWrapper>
                <StyledArrowHead size="13" />
              </StyledIconWrapper>
              <SideMenuTitle>Need Help?</SideMenuTitle>
            </SideMenuTitleWrapper>
            <SideMenuContactInformation>
              <p>
                If you have any question please don't hesitate to contact us
              </p>
              <SideMenuContactInformationWrapper>
                <StyledTelephoneFill size="11" />
                <p> 1-888-123-4567</p>
              </SideMenuContactInformationWrapper>
              <SideMenuContactInformationWrapper>
                <StyledEnvelopeFill size="13" />
                <p> contact@site.com or use contact form</p>
              </SideMenuContactInformationWrapper>
            </SideMenuContactInformation>
            <SideMenuTitleWrapper>
              <StyledIconWrapper>
                <StyledArrowHead size="13" />
              </StyledIconWrapper>
              <SideMenuTitle>Latest Posts</SideMenuTitle>
            </SideMenuTitleWrapper>
            <LatestPostLists>
              <LatestPostItem>
                <img
                  src={StyledRoomThumbail}
                  alt=""
                  srcset={StyledRoomThumbail}
                />
              </LatestPostItem>
            </LatestPostLists>
          </aside>
        </RoomWrapper>
      </Container>
    </>
  );
}

export default Room;
