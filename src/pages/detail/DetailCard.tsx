import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetPlanetDetail, WishlistToggle } from '../../actions/PlanetActions';
import {
  Row,
  Name,
  Label,
  CardContainer,
} from './DetailCard.styles';
import { AppStore } from '../../Store';
import {
  thousandFormat,
  dateFormat,
} from '../../helper';
import { Planet } from '../../actions/PlanetActionTypes';
import Star from '../../components/star/Star';

interface RouteParams {
  id: string;
}

const DetailCard = () => {
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();

  const planetState = useSelector((state: AppStore) => state.planet);
  const { planet, wishlist = [] } = planetState;

  function getDetail(planetIid: string) {
    dispatch(GetPlanetDetail(planetIid));
  }

  useEffect(() => {
    getDetail(id);
  }, []);
  const isWished = wishlist.filter((it: Planet) => (it.name === planet?.name)).length > 0;

  function wishlistToggle() {
    if (planet !== undefined) {
      dispatch(WishlistToggle(planet));
    }
  }
  return (
    planet ? (
      <CardContainer>
        <Row>
          <Name>{planet.name}</Name>
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
    ) : (<CardContainer />)
  );
};

export default DetailCard;
