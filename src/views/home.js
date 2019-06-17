import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

// import User from '../components/user';

export default () => {
  return (
    <Container>
      <h1>Hello</h1>

      <Link to="/transfeer">
        <Button variant="contained" color="primary">Transfer ETH</Button>
      </Link>

      <div>
      
      </div>
    </Container>
  );
};
