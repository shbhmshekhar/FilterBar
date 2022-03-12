import React from 'react';
import { components } from 'react-select';
import up from '../../Assets/filters/up.svg';
import down from '../../Assets/filters//down.svg';

const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? (
        <img alt='dropdown indicator' src={up} />
      ) : (
        <img alt='dropdown indicator' src={down} />
      )}
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
