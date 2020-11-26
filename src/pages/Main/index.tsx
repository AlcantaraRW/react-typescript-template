import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <h1>React + TypeScript template</h1>
    <Link to="/about">About</Link>
  </Container>
);

export default Main;
