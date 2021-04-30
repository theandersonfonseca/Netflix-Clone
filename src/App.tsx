import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import Banner from './components/Banner'
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Faq from './components/Faq'
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Banner>
          <Header/>
          <CallToAction/>
        </Banner>
        <Section1/>
        <Section2/>
        <Section3/>
        <Faq/>
        <Footer/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App
