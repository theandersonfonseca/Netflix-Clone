import React from 'react';
import { Container } from './styles';

import tvImg from '../../assets/tv.png'

const Section1 = () => {
  return (
  <Container>
    <div className="wrapper">
      <div className="text">
        <h1>Aproveite na TV.</h1>
        <h2>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</h2>
      </div>

      <img src={tvImg} alt="Tv"/>
    </div>
  </Container>
  );
};

export default Section1;
