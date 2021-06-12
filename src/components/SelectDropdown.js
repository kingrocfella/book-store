import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Container = styled.select`
  box-sizing: border-box;
  border-radius: 3px;
  height: 2.5rem;
  margin-top: 0.5rem;
  width: 100%;
  min-width: 5rem;
`;

export default function SelectDropdown({
  handleChange,
  value,
  data,
  labelText,
  keyValue,
}) {
  return (
    <label>
      {labelText && <span>{labelText}:</span>}&nbsp; <br />
      {keyValue ? (
        <Container onChange={handleChange} value={value?.id}>
          {data?.map(item => (
            <option key={item?.id} value={item?.id}>
              {item?.value}
            </option>
          ))}
        </Container>
      ) : (
        <Container onChange={handleChange} value={value}>
          {data?.map(item => (
            <option key={item?.id}>{item?.value}</option>
          ))}
        </Container>
      )}
    </label>
  );
}

SelectDropdown.propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  keyValue: PropTypes.bool,
};
