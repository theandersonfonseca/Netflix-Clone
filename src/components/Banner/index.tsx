import React from 'react';
import { Container } from './styles';

type BannerT = {
  children: JSX.Element | JSX.Element[];
}

const Banner = ({children}: BannerT) => {
  return <Container>{children}</Container>;
};

export default Banner;
