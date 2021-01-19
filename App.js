import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { Container } from './styles/page';
import Deck from './components/Deck';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Deck />
      </Container>
    </>
  );
}
