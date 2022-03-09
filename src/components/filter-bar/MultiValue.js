import React from 'react';
import { components } from 'react-select';

const MultiValue = (props) => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

export default MultiValue;
