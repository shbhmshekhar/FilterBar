import React from 'react';
import { components } from 'react-select';
import style from './FilterBar.module.scss';
// import { GlFlag } from '@adl/component-flag';

const Option = (props) => {
  return (
    <components.Option {...props}>
      <div className={style.filter__option}>
        {' '}
        <div className={style.filter__name}>
          <input
            type='checkbox'
            checked={props.isSelected}
            onChange={() => null}
            className={style.filter__checkbox}
          />
          <span className={style.filter__checkmark}></span>{' '}
          <label>
            {props.label}{' '}
            {props.data.count && (
              <span className={style.filter__count}>[{props.data.count}]</span>
            )}
          </label>
        </div>
        {/* {props.data.countryCode && (
          <GlFlag
            countryCode={props.data.countryCode.toLowerCase()}
            className={style['filter__country-code']}
          />
        )} */}
      </div>
    </components.Option>
  );
};

export default Option;
