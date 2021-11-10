import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header/Header';
import DetailCard from './DetailCard';

import {
  Container,
  Main,
  BackContainer,
  BackText,
} from './Detail.styles';

function Detail() {
  const history = useHistory();

  const handleBack = () => {
    if (history.action !== 'POP') {
      history.goBack();
    } else {
      history.push('/');
    }
  };

  return (
    <Container>
      <Header />
      <Main>
        <BackContainer onClick={() => handleBack()}>
          <BackText>
            &#8592; Back
          </BackText>
        </BackContainer>
        <DetailCard />
      </Main>
    </Container>
  );
}

export default Detail;
