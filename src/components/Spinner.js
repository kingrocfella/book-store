import React from 'react';
import styled from 'styled-components/macro';

const Loader = styled.div`
  margin-top: 5rem;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #823aa5;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner() {
  return <Loader />;
}
