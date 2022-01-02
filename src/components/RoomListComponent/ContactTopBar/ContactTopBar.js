import React from 'react';
import styled from 'styled-components';
import { TelephoneFill } from "@styled-icons/bootstrap/TelephoneFill";
import { Envelope } from "@styled-icons/bootstrap/Envelope";


const StyledContactTopBar = styled.div`
  background-color: #EEEEEE;
  color: #A9A9A9;
  display: flex;
  justify-content: space-between;
  padding: .7rem 7rem;
  border-bottom: 1px solid #F5F5F5;
`;

const StyledContactInfo = styled.div`
  display: flex;
  justify-content: space-around;
   
`;

const StyledContactInfoItem = styled.div`
  display: flex;
   
  margin-right: 3.5rem;
  align-items: center;

  &:last-of-type{
    margin-right: 0;
  }

  p{
    margin-left: .5rem;
  }

`;


function ContactTopBar() {
  return (

    <StyledContactTopBar>
      <p>
        Welcome to Hotel Zante
      </p>
      <StyledContactInfo>
        <StyledContactInfoItem>
          <TelephoneFill size="11" /> <p>1-888-123-4567</p>
        </StyledContactInfoItem>
        <StyledContactInfoItem>
          <Envelope size="14" /><p> contact@site.com
          </p>
        </StyledContactInfoItem>

      </StyledContactInfo>
    </StyledContactTopBar>

  )
}

export default ContactTopBar;