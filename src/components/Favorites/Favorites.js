import React from 'react';
import styled from 'styled-components';
import Subtitle from '../Subtitle/Subtitle';
import Container from '../Controls/Container/Container';

const FavoritesWrapper = styled.section`
    height: 100vh;
    padding: 5rem 0;
`;

export default function Favorites({ children }) {
  return (
    <FavoritesWrapper>
      <Container>
        <Subtitle>OUR FAVORITE ROOMS</Subtitle>
      </Container>
    </FavoritesWrapper>
  )
}
