import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../Store';

import PlanetCard from '../../../components/planet/PlanetCard';
import Container from './Wishlist.styles';

const Wishlist = () => {
  const planetState = useSelector((_state: AppStore) => _state.planet);
  const { wishlist } = planetState;
  const onWishlistPage: boolean = true;

  return (
    <Container>
      {wishlist.length > 0 && wishlist.map((_planet, index) => (
        <PlanetCard
          wishlist={onWishlistPage}
          id={index + 1}
          {..._planet}
          key={_planet.name}
        />
      ))}
    </Container>
  );
};

export default Wishlist;
