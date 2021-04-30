import React from 'react';
import { Container } from './styles';

import EmailInput from '../EmailInput'

const CallToAction = () => {
  return (
  <Container>
    <h1>Filmes, séries e muito mais. Sem limites.</h1>
    <h2>Assista onde quiser. Cancele quando quiser.</h2>
    <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
    
    <EmailInput/>
  </Container>
  );
};

export default CallToAction;
