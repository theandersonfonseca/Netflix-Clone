import React from 'react';
import { Container } from './styles';

import smartphoneImg from '../../assets/smarthphone.jpg'

const Section2 = () => {
  return (
  <Container>
    <div className="wrapper">
      <img src={smartphoneImg} alt="Tv"/>

      <div className="text">
        <h1>Baixe séries para assistir offline.</h1>
        <h2>Salve seus títulos favoritos e sempre tenha algo para assistir.</h2>
      </div>
    </div>
  </Container>
  );
};

export default Section2;
