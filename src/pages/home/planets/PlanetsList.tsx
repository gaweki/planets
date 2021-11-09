import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../../Store';
import { GetPlanet } from '../../../actions/PlanetActions';

import {
  Loading,
} from './Planets.styles';
import { Container, LastpageBlock } from './PlanetsList.styles';
import PlanetCard from '../../../components/planet/PlanetCard';

const PlanetsList = () => {
  const planetState = useSelector((_state: AppStore) => _state.planet);
  const { loading, planets, meta } = planetState;
  const dispatch = useDispatch();
  const getPlanets = (uri?: string) => {
    dispatch(GetPlanet(uri));
  };
  const lastPage = useRef<HTMLDivElement>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && typeof meta.next === 'string') {
        if (!loading) {
          getPlanets(meta.next);
        }
        if (lastPage.current) {
          observer.unobserve(lastPage.current);
        }
      }
    }, { threshold: 1 });
    if (lastPage.current) {
      observer.observe(lastPage.current);
    }

    return () => observer.disconnect();
  }, [loading, meta]);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Container>
      { planets.length > 0 && planets.map((_planet, index) => {
        if (planets.length === index + 1) {
          return (
            <PlanetCard
              wishlist={false}
              id={index + 1}
              {..._planet}
              ref={lastPage}
              key={_planet.name}
            />
          );
        }
        return (
          <PlanetCard
            wishlist={false}
            id={index + 1}
            {..._planet}
            key={_planet.name}
          />
        );
      }) }
      {(!loading && !meta.next) && <LastpageBlock>Last Page List</LastpageBlock>}
      {loading ? <Loading className="text-center">Please wait ...</Loading> : '' }
    </Container>
  );
};

export default PlanetsList;
