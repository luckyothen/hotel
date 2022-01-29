import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "../../Controls/Button/Button";
import Branding from "../Branding/Branding";
import { Calendar } from "@styled-icons/ionicons-outline/Calendar";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { device } from "../../../themes/MediaDefaults";
import { Link } from "react-router-dom";
import { uiActions } from "../../../redux/reducers/ui-reducer";
import { useDispatch } from "react-redux";

const navAnimationOpacity = keyframes`
 0% { top: -100px; opacity: .5}   
 100% { top: 0; opacity: 1 }
`;
let NavWrapperSticky = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  transition: 0.6s all ease-in;
  background-color: ${({ navBackgroundColor }) =>
    navBackgroundColor || "transparent"};
  position: ${({ position }) => position || "fixed"};
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.6s all ease-in;
  z-index: 999999;
  padding: 1rem 7rem;
  animation-name: ${navAnimationOpacity};
  animation-duration: 2s;
  animation-iteration-count: 1;

  /* CHange background color when scrolled down */
  ${({ backgroundImage }) =>
    !backgroundImage &&
    css`
      background-image: linear-gradient(
        to right top,
        #9e5872,
        #9c587c,
        #975988,
        #905c93,
        #855f7e
      );
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
    `}

  @media only screen and ${device.sm} {
    position: sticky;
    padding: 1rem 1rem;
    -moz-transition: none;
    -webkit-transition: none;
    -o-transition: color 0 ease-in;
    transition: none;
    animation: none;
    top: 0px;
    left: 0;
    z-index: 999999999999;

    /* Apply background image color default if nav is visible and 
    dont have a custom coloron small resolution  */
    ${({ backgroundImage, navBackgroundColor }) =>
      backgroundImage &&
      !navBackgroundColor &&
      css`
        background-image: linear-gradient(
          to right top,
          #9e5872,
          #9c587c,
          #975988,
          #905c93,
          #855f7e
        );
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
          rgba(17, 17, 26, 0.05) 0px 8px 32px;
      `}
  }
`;

const ListGroupWrapper = styled.div`
  @media only screen and ${device.sm} {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 999;
    left: 0;
    right: 0;
    top: -2000px;
    background-image: linear-gradient(
      to right top,
      #9e5872,
      #9c587c,
      #975988,
      #905c93,
      #855f7e
    );
    transition: 0.3s ease-in-out all;

    ${({ isSlideDownNav }) =>
      isSlideDownNav &&
      css`
        top: 0px;
        z-index: 999;
      `}
  }
`;

const ListGroup = styled.ul`
  list-style: none;
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

  @media only screen and ${device.sm} {
    display: flex;
    text-align: left !important;
    margin-bottom: 1rem;
    color: #fff;
  }
`;

const CalendarIcon = styled(Calendar)`
  color: white;
  margin-right: 0.4rem;
`;

const ArrowDownIcon = styled(ArrowIosDownward)`
  color: ${({ arrowDownIconColor }) => arrowDownIconColor || "#fff"};
  margin-left: 0.4rem;
  font-weight: 800;

  @media only screen and ${device.sm} {
    color: #fff;
  }
`;

const BurgerBar = styled.div`
  background-color: ${({ burgerMenuBarColor }) => burgerMenuBarColor || "#fff"};
  height: 3px;
  width: 30px;
  margin-bottom: 6px;
  margin-top: 6px;
  transition: all 0.3s ease-in-out;
`;

let BurgerContainer = styled.div`
  display: none;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;

  ${({ isuserClickedMenu }) =>
    isuserClickedMenu &&
    css`
      ${BurgerBar} {
        &:first-of-type {
          -webkit-transform: rotate(-45deg) translate(-4px, 5px);
          transform: rotate(-45deg) translate(-4px, 5px);
        }
        &:nth-of-type(2) {
          opacity: 0;
        }
        &:nth-of-type(3) {
          -webkit-transform: rotate(45deg) translate(-8px, -8px);
          transform: rotate(45deg) translate(-8px, -8px);
        }
      }
    `};

  &:hover {
    cursor: pointer;
    ${BurgerBar} {
      background-color: ${({ burgerMenuBarHoverColor }) =>
        burgerMenuBarHoverColor || "#ffb300"};
    }
  }

  @media only screen and ${device.sm} {
    display: block;
    position: fixed;
    top: 15px;
    right: 2rem;
    z-index: 99999999999999999;
  }
`;

export default function Nav({
  isInview,
  navBackgroundColor,
  brandingTextColor,
  linkColor,
  arrowDownIconColor,
  position,
  isSlideDownNav,
  burgerMenuBarColor,
  burgerMenuBarHoverColor,
}) {
  const [isUserClickedMenu, setIsUserClickedMenu] = useState(false);
  useEffect(() => {}, [isUserClickedMenu]);

  const dispatch = useDispatch();

  const StyledLink = styled(Link)`
    color: ${({ linkColor }) => linkColor || "#fff"} !important;
    text-decoration: none;
    &:not(:last-of-type) {
      margin-right: 4rem;
    }

    &:hover {
      cursor: pointer;
      color: #ffb300 !important;
    }

    @media only screen and ${device.sm} {
      color: #fff !important;
    }
  `;

  const burgerMenuOnClick = () => {
    setIsUserClickedMenu(!isUserClickedMenu);
    dispatch(uiActions.slideDownNav());
  };

  const clickedNavMenu = () => {
    dispatch(uiActions.slideUpNav());
  };

  return (
    <NavWrapperSticky
      device={device}
      backgroundImage={isInview}
      position={position}
      navBackgroundColor={navBackgroundColor}
    >
      <Branding color={brandingTextColor}>Zogo Hotel</Branding>
      <ListGroupWrapper isSlideDownNav={isSlideDownNav}>
        <ListGroup isSlideDownNav={isSlideDownNav}>
          <ListGroupItem>
            <StyledLink to="/" linkColor={linkColor} onClick={clickedNavMenu}>
              Home{" "}
              <ArrowDownIcon
                size="16"
                arrowDownIconColor={arrowDownIconColor}
              />
            </StyledLink>
          </ListGroupItem>
          <ListGroupItem onClick={clickedNavMenu}>
            <StyledLink
              to="/rooms"
              linkColor={linkColor}
              onClick={clickedNavMenu}
            >
              Rooms{" "}
              <ArrowDownIcon
                size="16"
                arrowDownIconColor={arrowDownIconColor}
              />
            </StyledLink>
          </ListGroupItem>
          <ListGroupItem>
            <StyledLink
              to="/rooms"
              linkColor={linkColor}
              onClick={clickedNavMenu}
            >
              Contact Us{" "}
              <ArrowDownIcon
                size="16"
                arrowDownIconColor={arrowDownIconColor}
              />
            </StyledLink>
          </ListGroupItem>
          <ListGroupItem>
            <Button hover="hover">
              <CalendarIcon size="14" />
              Book Online
            </Button>
          </ListGroupItem>
        </ListGroup>
      </ListGroupWrapper>
      <BurgerContainer
        onClick={burgerMenuOnClick}
        isuserClickedMenu={isUserClickedMenu}
        burgerMenuBarHoverColor={burgerMenuBarHoverColor}
      >
        <BurgerBar burgerMenuBarColor={burgerMenuBarColor} />
        <BurgerBar burgerMenuBarColor={burgerMenuBarColor} />
        <BurgerBar burgerMenuBarColor={burgerMenuBarColor} />
      </BurgerContainer>
    </NavWrapperSticky>
  );
}
