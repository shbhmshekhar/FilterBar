import React from 'react';
import style from './SelectedFilters.module.scss';

const SelectedFilters = (props) => {
  const { value, onChange } = props;

  const handleRemoveValue = (e) => {
    const { name: buttonName } = e.currentTarget;
    const removedValue = value.find((val) => val.value === buttonName);
    if (!removedValue) return;
    onChange(
      value.filter((val) => val.value !== buttonName),
      { action: 'remove-value', removedValue }
    );
  };

  return (
    <div className={style.filter__display}>
      {value.map((val) => (
        <div className={style.filter__values} key={val.value}>
          {val.label}
          <button
            className={style.filter__remove}
            name={val.value}
            onClick={handleRemoveValue}
          >
            ✕
          </button>
        </div>
      ))}
      {value.length !== 0 && (
        <button
          type='button'
          className={style.filter__clear}
          onClick={props.onBtnClick}
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default SelectedFilters;
