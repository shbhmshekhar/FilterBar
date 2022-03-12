import React, { useState, useEffect } from 'react';
// import { components } from 'react-select';
import style from './FilterBar.module.scss';
import Filter from '../Filter/Filter';
// import SeasonFilter from '../season-filter/SeasonFilter';/
import SelectedFilters from '../selected-filter/SelectedFilters';
// import { GlFlag } from '@adl/component-flag';
// import { useDispatch } from 'react-redux';
import DropdownIndicator from './DropdownIndicator';
import Option from './Option';
import MultiValue from './MultiValue';
import customStyle from './filterbar-style';
const filterBarData = [
  {
    id: 1,
    label: 'Country',
    filters: [
      {
        id: 1,
        label: 'Australia',
        // value: "AU",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 2,
        label: 'Norway',
        // value: "NOR",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 3,
        label: 'India',
        // value: "IND",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 4,
        label: 'Austria',
        //  value: "ATR",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 5,
        label: 'Germany',
        //  value: "DE",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 6,
        label: 'big country Name',
        // value: "RSA",
        countryCode: 'DE',
        count: null,
      },
      { id: 7, label: 'Bhutan', value: 'BN', countryCode: 'DE', count: null },
      {
        id: 7,
        label: 'Sri Lanka',
        // value: "SL",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 7,
        label: 'Myanmar',
        // value: "MYN",
        countryCode: 'DE',
        count: null,
      },
    ],
  },
  {
    id: 2,
    label: 'Segments',
    filters: [
      {
        id: 1,
        label: 'Tennis',
        // value: "Tennis",
        countryCode: null,
        count: 234,
      },
      {
        id: 2,
        label: 'Others',
        // value: "Others",
        countryCode: null,
        count: 123,
      },
    ],
  },
  {
    id: 3,
    label: 'APMC',
    filters: [
      {
        id: 1,
        label: 'Full Size',
        // value: "Full Size",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 2,
        label: 'Yeezey',
        // value: "Yeezey",
        countryCode: 'DE',
        count: null,
      },
    ],
  },
  {
    id: 4,
    label: 'KCC',
    filters: [
      {
        id: 1,
        label: 'Basketball',
        // value: "Basketball",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 2,
        label: 'Football',
        // value: "Football",
        countryCode: 'DE',
        count: null,
      },
    ],
  },
  {
    id: 5,
    label: 'Market',
    filters: [
      {
        id: 1,
        label: 'EU',
        //  value: "EU",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 2,
        label: 'NAM',
        // value: "NAM",
        countryCode: 'DE',
        count: null,
      },
    ],
  },
  {
    id: 6,
    label: 'Franchise',
    filters: [
      // { id: 1, label: "Forum", value: "Forum", countryCode: "DE", count: null },
      {
        id: 2,
        label: 'Rapida',
        // value: "Rapida",
        countryCode: 'DE',
        count: null,
      },
    ],
  },
  {
    id: 7,
    label: 'Division',
    filters: [
      {
        id: 1,
        label: 'Apparel',
        // value: "Apparel",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 2,
        label: 'Footwear',
        // value: "Footwear",
        countryCode: 'DE',
        count: null,
      },
    ],
  },
  {
    id: 8,
    label: 'Gender',
    filters: [
      {
        id: 1,
        label: 'Male',
        // value: "Male",
        countryCode: 'DE',
        count: null,
      },
      {
        id: 2,
        label: 'Female',
        // value: "Female",
        countryCode: 'DE',
        count: null,
      },
    ],
  },
  {
    id: 9,
    label: 'Channel',
    filters: [
      {
        id: 1,
        label: 'App test long',
        // value: "App test long",
        countryCode: 'DE',
        count: null,
      },
      { id: 2, label: 'Web', value: 'Web', countryCode: 'DE', count: null },
    ],
  },
];

const timelineData = {
  timelineCalendar: [
    {
      id: 'std',
      label: 'STD',
      labelName: 'Season to Date (STD)',
    },
    {
      id: 'ytd',
      label: 'YTD',
      labelName: 'Year to Date (YTD)',
    },
    {
      id: 'mtd',
      label: 'MTD',
      labelName: 'Month to Date (MTD)',
    },
    {
      id: 'custom',
      label: 'CUSTOM',
      labelName: 'Custom',
    },
  ],
};

const FilterBar = (props) => {
  // const { filterLabelData, filterAPIData } = props;
  const [selectedFilters, setSelectedFilters] = useState([]);
  // const [filterBarData, setFilterBarData] = useState([]);
  // const [timelineData, setTimelineData] = useState([]);

  // const dispatch = useDispatch();
  const arr = [];
  const filterLabels = document.getElementsByClassName(
    'css-1r8kbdd-placeholder'
  );

  const makeLabelBold = (selected) => {
    if (selected === null) {
      for (let i = 0; i < filterLabels.length; i++) {
        filterLabels[i].classList.remove(style.bold);
      }
    } else {
      for (let i = 0; i < selected.length; i++) {
        if (!arr.includes(selected[i].parentLabel)) {
          arr.push(selected[i].parentLabel);
        }
      }
      for (let i = 0; i < filterLabels.length; i++) {
        if (arr.includes(filterLabels[i].textContent)) {
          // console.log(filterLabels[i].textContent);
          filterLabels[i].classList.add(style.bold);
        } else {
          filterLabels[i].classList.remove(style.bold);
        }
      }
    }
  };

  const changeHandler = (selected) => {
    makeLabelBold(selected);
    setSelectedFilters(selected);
    // dispatch({ type: 'UPDATE_FILTER_PARAM', payload: selected });
  };

  const clearBtnHandler = () => {
    setSelectedFilters([]);
    makeLabelBold(null);
    // dispatch({ type: 'CLEAR_FILTER_PARAM' });
  };
  // const filterData = () => {
  //   const filterData = [];
  //   if (filterLabelData.length !== 0 && filterAPIData.length !== 0) {
  //     filterLabelData.filterData?.map((data, index) => {
  //       if (data.id === filterAPIData.filterData[index].id) {
  //         if (filterAPIData.filterData[index].access === true) {
  //           const labelData = {
  //             ...data,
  //             filter: filterAPIData.filterData[index].data,
  //           };
  //           return filterData.push(labelData);
  //         }
  //       }

  //       return filterData;
  //     });

  //     const filterLabel = filterData.map(data => {
  //       const filter = data.filter.map(item => ({
  //         ...item,
  //         value: item.label,
  //         parentLabel: data.labelName,
  //       }));

  //       return { ...data, filter: filter };
  //     });

  //     return setFilterBarData(() => filterLabel);
  //   }
  //   setTimelineData(() => filterLabelData.timelineCalendar);
  // };

  // useEffect(() => {
  //   filterData();
  // }, [filterLabelData, filterAPIData]);

  return (
    <>
      <div className={style['filter-bar']}>
        {filterBarData.map((filterItem) => {
          console.log(filterItem);
          return (
            <Filter
              key={filterItem.id}
              isMulti
              isMenuOpen
              placeholder={filterItem.label}
              options={filterItem.filters}
              value={selectedFilters}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                Option,
                MultiValue,
                DropdownIndicator,
              }}
              className={style['filter-bar__name']}
              controlShouldRenderValue={false}
              onChange={(selected) =>
                changeHandler(selected, filterItem.labelName)
              }
              onBtnClick={clearBtnHandler}
              isClearable={false}
              isSearchable={false}
              styles={customStyle}
              backspaceRemovesValue={false}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                borderBottom: 'none',
                color: 'black',
                colors: {
                  ...theme.colors,
                  text: 'black',
                  primary: '#E6E9ED',
                  primary50: '#E6E9ED',
                },
              })}
            />
          );
        })}
        {/* {timelineData && (
          <SeasonFilter
            className={style['filter-bar__time']}
            seasonLabelData={timelineData}
          />
        )} */}
      </div>
      <SelectedFilters
        onChange={changeHandler}
        onBtnClick={clearBtnHandler}
        value={selectedFilters}
      />
    </>
  );
};

export default FilterBar;
