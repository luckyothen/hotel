import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from "styled-components";
import Button from "../../Controls/Button/Button";
import Branding from '../Branding/Branding';
import Container from '../../Controls/Container/Container';
import { Calendar } from "@styled-icons/ionicons-outline/Calendar";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { device } from '../../../themes/MediaDefaults';
import { Link, NavLink } from 'react-router-dom';

const navAnimationOpacity = keyframes`
 0% { top: -100px; opacity: .5}   
 100% { top: 0; opacity: 1 }
`
let NavWrapperSticky = styled.nav`
 display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff; 
  transition: .6s all ease-in;
  background-color: ${({ navBackgroundColor }) => navBackgroundColor || "transparent"};  
  position:  ${({ position }) => position || "fixed"};;
  top: 0;
  left: 0;
  width: 100%;
  transition: .6s all ease-in;
  z-index: 99999;
  padding: 1rem 6rem;
  animation-name: ${navAnimationOpacity};
  animation-duration: 2s;
  animation-iteration-count: 1;

   @media only screen and ${device.sm}{
            padding: 1rem 1rem;      
        }  
  
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
  color:${({ arrowDownIconColor }) => arrowDownIconColor || "#fff"};  ;
  margin-left: 0.4rem;
  font-weight: 800;
`;

const BurgerBar = styled.div`
  background-color: #fff;
  height: 3px;
  width: 30px;
  margin-bottom:6px;
  margin-top: 6px;
  transition: all .3s ease-in-out;  

  

`;

let BurgerContainer = styled.div`
  display: none;
  padding: .5rem;
  transition: all .3s ease-in-out;  
  
  ${({ isuserClickedMenu }) => isuserClickedMenu && css`
         ${BurgerBar}{       
             &:first-of-type{
               -webkit-transform: rotate(-45deg) translate(-4px, 5px) ;
                transform: rotate(-45deg) translate(-4px, 5px) ;
             }  
              &:nth-of-type(2){
                opacity: 0;
             }  
             &:nth-of-type(3){
               -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
                transform: rotate(45deg) translate(-8px, -8px) ;
             }  
         }
    `};

  
 
  &:hover{
    cursor:pointer;
     ${BurgerBar} {
      background-color: #ffb300;
    }
 
  }

   @media only screen and ${device.sm}{
         display: block;
        }
`;

export default function Nav({ isInview, navBackgroundColor, brandingTextColor, linkColor, arrowDownIconColor, position }) {

  const [isUserClickedMenu, setIsUserClickedMenu] = useState(false);
  useEffect(() => {

  }, [isUserClickedMenu]);


  const burgerMenuOnClick = () => {
    setIsUserClickedMenu(!isUserClickedMenu)

  }

  const StyledLink = styled(Link)`
    color:  ${({ linkColor }) => linkColor || "#fff"} !important;
    text-decoration: none;
     &:not(:last-of-type) {
      margin-right: 4rem;
    }

    &:hover {
      cursor: pointer;
      color: #ffb300 !important;
    }  
  `;

  return (
    <NavWrapperSticky device={device} backgroundImage={isInview} position={position} navBackgroundColor={navBackgroundColor}>
      <Branding color={brandingTextColor}>Zogo Hotel</Branding>
      <ListGroup>
        <ListGroupItem>
          <StyledLink to="/" linkColor={linkColor} >
            Home <ArrowDownIcon size="16" arrowDownIconColor={arrowDownIconColor} />
          </StyledLink>
        </ListGroupItem>
        <ListGroupItem>
          <StyledLink to="/rooms" linkColor={linkColor} >
            Rooms <ArrowDownIcon size="16" arrowDownIconColor={arrowDownIconColor} />
          </StyledLink>
        </ListGroupItem>
        <ListGroupItem>
          <StyledLink to="/rooms" linkColor={linkColor} >
            Contact Us <ArrowDownIcon size="16" arrowDownIconColor={arrowDownIconColor} />
          </StyledLink>
        </ListGroupItem>
        <ListGroupItem>
          <Button hover="hover">
            <CalendarIcon size="14" />
            Book Online
          </Button>
        </ListGroupItem>
      </ListGroup>
      <BurgerContainer onClick={burgerMenuOnClick} isuserClickedMenu={isUserClickedMenu}>
        <BurgerBar />
        <BurgerBar />
        <BurgerBar />
      </BurgerContainer>
    </NavWrapperSticky>
  );
}
