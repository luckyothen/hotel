import React from 'react';
import styled from 'styled-components';

const HeaderTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    height: 50vh;
 
`;

const HeaderTitleBigText = styled.h1`
    text-transform: uppercase;
    font-size: 4.5rem;
    font-awesome: 700;
    color: #fff;
`;

const HeaderTitleMediumText = styled.h3`    
    font-size: 1.3rem;
    color: #fff;
    font-weight: 300;
    opacity: .8;
`;

export default function HeaderTitle() {
    return (
        <HeaderTitleWrapper>
            <HeaderTitleBigText>
                Modern & Spacious Room
            </HeaderTitleBigText>
            <HeaderTitleMediumText>
                Enjoy your holidays at Hotel Zante
            </HeaderTitleMediumText>
        </HeaderTitleWrapper>

    )
}
