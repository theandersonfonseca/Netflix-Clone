import React from 'react';
import { Container } from './styles';

import Button from '../Button'

const CallToAction = () => {
  return (
  <Container>
    <h1>Filmes, séries e muito mais. Sem limites.</h1>
    <h2>Assista onde quiser. Cancele quando quiser.</h2>
    <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>

    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Email"/>
      <Button>{'Vamos Lá >'}</Button>
    </form>
  </Container>
  );
};

export default CallToAction;
