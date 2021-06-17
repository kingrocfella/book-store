import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Icon from './Icon';

export const Button = styled.button`
  border: 1px solid #d6216b;
  border-radius: 20px;
  background: #fff;
  color: #d6216b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 0.4rem 1.5rem;
  ${Icon} {
    font-size: 0.75em;
    margin-top: 1px;
    margin-right: 8px;
  }
`;

const TextButton = styled.button`
  border: none;
  background: none;
  color: #1eb5c4;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Icon} {
    font-size: 0.75em;
    margin-top: 1px;
    margin-right: 8px;
  }
`;

export const SaveButton = ({ saved, onSave, onRemove, className }) => {
  const [state, setState] = useState(saved);
  return state ? (
    <TextButton
      className={className}
      onClick={() => {
        onRemove();
        setState(false);
      }}
    >
      <Icon icon="check" /> Saved
    </TextButton>
  ) : (
    <Button
      className={className}
      onClick={() => {
        onSave();
        setState(true);
      }}
    >
      <Icon icon="plus" /> Save
    </Button>
  );
};

SaveButton.propTypes = {
  saved: PropTypes.bool,
  onSave: PropTypes.func,
  onRemove: PropTypes.func,
  className: PropTypes.string,
};
