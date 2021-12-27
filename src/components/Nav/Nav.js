import styled, { keyframes, css } from "styled-components";
import Button from "../Controls/Button/Button";
import Branding from '../Branding/Branding';
import Container from '../Controls/Container/Container';
import { Calendar } from "@styled-icons/ionicons-outline/Calendar";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { device } from '../../themes/MediaDefaults';

const navAnimationOpacity = keyframes`
 0% { top: -100px; opacity: .5}   
 100% { top: 0; opacity: 1 }
`

let NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 4rem 0;
  transition: .6s all ease-in;
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  z-index: 9999;
 
   @media only screen and ${device.sm}{
           padding: 1rem 0;
        }  
`;

let NavWrapperSticky = styled(NavWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
    transition: .6s all ease-in;
 
  z-index: 99999;
  padding: 1rem 6rem;
  animation-name: ${navAnimationOpacity};
  animation-duration: 2s;
  animation-iteration-count: 1;
  
   ${({ backgroundImage }) => !backgroundImage && css`
  	 background-image: linear-gradient(
    to right top,
    #9e5872,
    #9c587c,
    #975988,
    #905c93,
    #855f7e
  );	 
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  `}
`;

const ListGroup = styled.nav`
  list-style: none;
    @media only screen and ${device.sm}{
         display: none;
        }
`;

const ListGroupItem = styled.li`
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  transition: 0.2s color ease-in;

  &:not(:last-of-type) {
    margin-right: 4rem;
  }

  &:hover {
    cursor: pointer;
    color: #ffb300;
  }
`;

const CalendarIcon = styled(Calendar)`
  color: white;
  margin-right: 0.4rem;
`;

const ArrowDownIcon = styled(ArrowIosDownward)`
  color: white;
  margin-left: 0.4rem;
  font-weight: 800;
`;


export default function Nav({ isInview, backgroundColor, brandingTextColor }) {

  let navContent = <>
    <Branding color={brandingTextColor}>Zogo Hotel</Branding>
    <ListGroup>
      <ListGroupItem>
        Home <ArrowDownIcon size="16" />
      </ListGroupItem>
      <ListGroupItem>
        Rooms <ArrowDownIcon size="16" />
      </ListGroupItem>
      <ListGroupItem>
        Contact Us <ArrowDownIcon size="16" />
      </ListGroupItem>
      <ListGroupItem>
        <Button hover="hover">
          <CalendarIcon size="14" />
          Book Online
        </Button>
      </ListGroupItem>
    </ListGroup>
  </>

  // let mainContent =
  //   <NavWrapper device={device} backgroundColor={backgroundColor}>
  //     {navContent}
  //   </NavWrapper>


  let mainContent =
    <NavWrapperSticky device={device} backgroundImage={isInview}>
      {navContent}
    </NavWrapperSticky>


  return (
    <>

      {mainContent}
    </>
  );
}
