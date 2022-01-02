import React from 'react';
import styled from 'styled-components';
import { device } from '../../../themes/MediaDefaults';

const HeaderTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    height: 46vh;

     @media only screen and ${device.sm}{
          display:none;
        }
 
`;

const HeaderTitleBigTextStyled = styled.h1`
    text-transform: uppercase;
    font-size: 4.5rem;
    font-weight: 700;
    color: #fff;
`;

const HeaderTitleMediumTextStyled = styled.h3`    
    font-size: 1.3rem;
    color: #fff;
    font-weight: 300;
    opacity: .8;
`;

export default function HeaderTitle() {
    return (
        <HeaderTitleWrapper>
            <HeaderTitleBigTextStyled>
                Modern & Spacious Room
            </HeaderTitleBigTextStyled>
            <HeaderTitleMediumTextStyled>
                Enjoy your holidays at Hotel Zogo
            </HeaderTitleMediumTextStyled>
        </HeaderTitleWrapper>

    )
}
