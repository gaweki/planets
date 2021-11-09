import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetPlanetDetail, WishlistToggle } from '../../actions/PlanetActions';
import Header from '../../components/header/Header';
import Star from '../../components/star/Star';
import {
  thousandFormat,
  dateFormat,
} from '../../helper';

import {
  Row,
  Container,
  Main,
  Title,
  Label,
  BackContainer,
  BackText,
  CardContainer,
} from './Detail.styles';
import { AppStore } from '../../Store';
import { Planet } from '../../actions/PlanetActionTypes';

interface RouteParams {
  id: string;
}

function Detail() {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const dispatch = useDispatch();

  const planetState = useSelector((state: AppStore) => state.planet);
  const { planet, wishlist = [] } = planetState;

  function getDetail(planetIid: string) {
    dispatch(GetPlanetDetail(planetIid));
  }

  const isWished = wishlist.filter((it: Planet) => (it.name === planet?.name)).length > 0;

  function wishlistToggle() {
    if (planet !== undefined) {
      dispatch(WishlistToggle(planet));
    }
  }

  useEffect(() => {
    getDetail(id);
  }, []);

  return (
    <Container>
      <Header />
      { planet && (
      <Main>
        <BackContainer onClick={() => history.goBack()}>
          <BackText>
            &#8592; Back
          </BackText>
        </BackContainer>
        <CardContainer>
          <Row>
            <Title>{planet.name}</Title>
            {isWished
              ? <Star active onClick={() => wishlistToggle()} />
              : <Star active={false} onClick={() => wishlistToggle()} />}
          </Row>
          <Row>
            <Label>Gravity</Label>
            <Label>{planet.gravity}</Label>
          </Row>
          <Row>
            <Label>Population</Label>
            <Label>{thousandFormat(planet.population)}</Label>
          </Row>
          <Row>
            <Label>Diameter</Label>
            <Label>{thousandFormat(planet.diameter)}</Label>
          </Row>
          <Row>
            <Label>Residents</Label>
            <Label>{thousandFormat(planet.residents.length.toString())}</Label>
          </Row>
          <Row>
            <Label>Climate</Label>
            <Label>{planet.climate}</Label>
          </Row>
          <Row>
            <Label>Terrain</Label>
            <Label>{planet.terrain}</Label>
          </Row>
          <Row>
            <Label>Population</Label>
            <Label>{thousandFormat(planet.population)}</Label>
          </Row>
          <Row>
            <Label>Created</Label>
            <Label>{dateFormat(planet.created)}</Label>
          </Row>

        </CardContainer>
      </Main>
      )}
    </Container>
  );
}

export default Detail;
