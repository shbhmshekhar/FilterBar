import React from 'react';
import ReactSelect from 'react-select';

const Filter = (props) => {
  return (
    <div className={props.className}>
      <ReactSelect {...props} />
    </div>
  );
};

export default Filter;
