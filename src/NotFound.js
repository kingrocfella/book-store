import React from 'react';
import styled from 'styled-components/macro';
import { navigate } from '@reach/router';
import { PAGE_ROUTES } from './routes';

const Button = styled.button`
  background: #593ca2;
  padding: 1rem;
  margin-top: 1rem;
  color: white;
  border: 1px solid white;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function NotFound() {
  return (
    <div className="display-center mt5">
      <Row>
        <h1>PAGE NOT FOUND!</h1>
        <Button onClick={() => navigate(PAGE_ROUTES.home())}>GO HOME</Button>
      </Row>
    </div>
  );
}
