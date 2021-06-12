import React from 'react';
import PropTypes from 'prop-types';
import Select from './SelectDropdown';
import { CONSTANTS } from '../constants';

export default function Sorter({ sortBy, setSortBy }) {
  return (
    <Select
      handleChange={e => setSortBy(e.target.value)}
      value={sortBy}
      data={CONSTANTS.SORT_DATA}
      labelText="Sort by"
      keyValue
    />
  );
}

Sorter.propTypes = {
  sortBy: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  setSortBy: PropTypes.func.isRequired,
};
