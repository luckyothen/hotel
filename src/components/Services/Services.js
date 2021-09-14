import React from 'react';
import styled from 'styled-components';
import Container from '../Controls/Container/Container';
import Subtitle from "../Subtitle/Subtitle";
import SubtitleLargeText from "../Subtitle/SubtitleLargeText";
import SubtitleSmallText from "../Subtitle/SubtitleSmallText";
import houseMaidImage from '../../assets/images/housemaid.jpg';
import { SpoonKnife } from "@styled-icons/icomoon";

const ServicesWrapperStyled = styled.section`
  background-color: #F5F5F5;
  padding: 5rem 0;
`

const ServicesInformationWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
   
   > *{
    width: 50%;
    height: 100%;
  }
`;

const ServicesListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #fff;
  padding: 1rem;
  
  > *:first-child{
    width: 15%;
  }

   > *:last-child{
    width: 85%;
  }

`;

const ServicesListItemTextStyled = styled.text`
  color: #A1B1C1;
`;

const ServicesListItemTitleStyled = styled.text`
   font-size: 1.4rem;
   font-weight: 400;
   margin-bottom: .7rem;
`;

const SpoonKnifeStyled = styled(SpoonKnife)`
  color: #F8C11D;
`;

export default function Services() {
  return (
    <ServicesWrapperStyled>
      <Container>
        <Subtitle>
          <SubtitleLargeText>OUR AWESOME SERVICES</SubtitleLargeText>
          <SubtitleSmallText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </SubtitleSmallText>
        </Subtitle>

        <ServicesInformationWrapperStyled>
          <img src={houseMaidImage} alt="House Maid" />
          <ul>
            <ServicesListItemStyled>
              <div>
                <SpoonKnifeStyled size="33" />
              </div>
              <ServicesListItemTextStyled>
                <ServicesListItemTitleStyled>Restaurant</ServicesListItemTitleStyled>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illo in quas dolor deleniti earum, id perferendis excepturi dolorem a architecto accusantium illum velit maiores ab. Autem ab architecto minima corrupti, a neque nobis assumenda ipsam natus repellendus saepe repudiandae.</p>
              </ServicesListItemTextStyled>
            </ServicesListItemStyled>
            <ServicesListItemStyled>
              <div>
                <h3>Test</h3>
              </div>
              <div>
                <h3>Testing bitches</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illo in quas dolor deleniti earum, id perferendis excepturi dolorem a architecto accusantium illum velit maiores ab. Autem ab architecto minima corrupti, a neque nobis assumenda ipsam natus repellendus saepe repudiandae.</p>
              </div>
            </ServicesListItemStyled>
          </ul>
        </ServicesInformationWrapperStyled>
      </Container>
    </ServicesWrapperStyled>
  )
}
