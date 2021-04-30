import React from 'react';
import { Container } from './styles';

const EmailInput = () => {
  return <Container onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Email"/>
      <button>{'Vamos Lá >'}</button>
    </Container>;
};

export default EmailInput;
