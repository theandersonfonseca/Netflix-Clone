import React from 'react';
import { Container } from './styles';

type ButtonT = {
  children: string;
}

const Button = ({ children}: ButtonT) => {
  return <Container>{children}</Container>;
};

export default Button;
