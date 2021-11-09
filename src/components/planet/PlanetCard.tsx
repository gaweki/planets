import React from 'react';

import { Planet } from '../../actions/PlanetActionTypes';
import {
  Container,
  Header,
  Name,
  Tag,
  DescriptionContainer,
  Description,
} from './PlanetCard.styles';

import {
  thousandFormat,
  dateFormat,
} from '../../helper';

type PlanetProps = {
  id: number;
  wishlist: boolean;
}

const getId = (url: string) => url.split('/')[5];

const PlanetCard = React.forwardRef<any, Planet & PlanetProps>(({
  created,
  id,
  name,
  population,
  url,
  wishlist,
}: Planet & PlanetProps, ref) => (
  <Container href={wishlist ? `/planet/${getId(url)}` : `/planet/${id}`} ref={ref}>
    <Header>
      <Name>{name}</Name>
      <Tag>{`Population: ${thousandFormat(population)}`}</Tag>
    </Header>
    <DescriptionContainer>
      <Description>{`Created: ${dateFormat(created)}`}</Description>
    </DescriptionContainer>
  </Container>
));

export default PlanetCard;
