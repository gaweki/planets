import React from 'react';

import { Planet } from '../../actions/PlanetActionTypes';
import {
  Container,
  Header,
  Title,
  Tag,
  DescriptionContainer,
  Description,
} from './PlanetCard.styles';

type PlanetProps = {
  id: number;
  wishlist: boolean;
}

const populationText = (text: string) => (Number.isNaN(parseInt(text, 10)) ? text : Number(text).toLocaleString('id'));

const createdText = (text: string) => (new Date(text).toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
}));

const PlanetCard = React.forwardRef<any, Planet & PlanetProps>(({
  id,
  name,
  population,
  created,
  wishlist,
}: Planet & PlanetProps, ref) => (
  <Container href={wishlist ? '#' : `/planet/${id}`} ref={ref}>
    <Header>
      <Title>{name}</Title>
      <Tag>{`Population: ${populationText(population)}`}</Tag>
    </Header>
    <DescriptionContainer>
      <Description>{`Created: ${createdText(created)}`}</Description>
    </DescriptionContainer>
  </Container>
));

export default PlanetCard;
