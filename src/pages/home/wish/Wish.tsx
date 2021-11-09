import React from 'react';
import {
  Main,
  Container,
} from '../planets/Planets.styles';

import Header from '../../../components/header/Header';
import Tabs from '../tabs/Tabs';
import Wishlist from './Wishlist';

function Wish() {
  return (
    <Container>
      <Header />
      <Main>
        <Tabs />
        <Wishlist />
      </Main>
    </Container>
  );
}

export default Wish;
