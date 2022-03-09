import React from 'react';
import { components } from 'react-select';
import up from '../../../assets/icons/filter-bar/up.svg';
import down from '../../../assets/icons/filter-bar/down.svg';

const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props}>
      <img alt='dropdown indicator' src={menuIsOpen ? 'up' : 'down'} />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
