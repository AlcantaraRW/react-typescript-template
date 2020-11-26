import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => (
  <>
    <h1>Hello world!</h1>
    <Link to="/about">About</Link>
  </>
);

export default Main;
