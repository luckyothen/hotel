import React from "react";
import styled from "styled-components";
import { TelephoneFill } from "@styled-icons/bootstrap/TelephoneFill";
import { Envelope } from "@styled-icons/bootstrap/Envelope";
import { device } from "../../../themes/MediaDefaults";

const StyledContactTopBar = styled.div`
  background-color: #eeeeee;
  color: #a9a9a9;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 7rem;
  border-bottom: 1px solid #f5f5f5;

  @media only screen and ${device.xs} {
    display: none;
  }
`;

const StyledContactInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledContactInfoItem = styled.div`
  display: flex;

  margin-right: 3.5rem;
  align-items: center;

  &:last-of-type {
    margin-right: 0;
  }

  p {
    margin-left: 0.5rem;
  }
`;

function ContactTopBar() {
  return (
    <StyledContactTopBar>
      <p>Welcome to Hotel Zogo</p>
      <StyledContactInfo>
        <StyledContactInfoItem>
          <TelephoneFill size="11" /> <p>1-888-123-4567</p>
        </StyledContactInfoItem>
        <StyledContactInfoItem>
          <Envelope size="14" />
          <p> contact@site.com</p>
        </StyledContactInfoItem>
      </StyledContactInfo>
    </StyledContactTopBar>
  );
}

export default ContactTopBar;
