const customStyle = {
  placeholder: (provided) => {
    return {
      ...provided,
      color: 'black',
      fontWeight: '',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    };
  },
  container: (provided) => ({
    ...provided,
    borderRadius: '0px',
    marginRight: '0.313rem',
  }),
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    borderRadius: '0',
    cursor: 'pointer',
    height: '2.5rem',
    background: '#FAFAFA',
    zIndex: state.isFocused ? '2' : '0',
    boxShadow: state.isFocused ? 'inset  0 1px 1px #000' : 'none',
    '&:hover': {
      boxShadow: !state.isFocused ? '0 0 0 1px #000' : 'inset  0 1px 1px #000',
    },
  }),

  indicatorSeparator: (provided) => ({
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    border: '1px solid black',
    width: '18.125rem',
    marginTop: '-0.031rem',
    zIndex: '1',
    borderRadius: '0px',
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: '0px',
    marginTop: '0.5rem',
    '::-webkit-scrollbar': {
      width: '4px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#888',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  }),

  option: (provided, state) => ({
    ...provided,
    height: '3rem',
    paddingTop: '1rem',
    left: '0px',
    width: '100%',
    alignItems: 'center',
    borderRadius: '0px',
    color: '#000',
    cursor: 'pointer',
    backgroundColor: state.isSelected ? '#E6E9ED' : 'white',
    '&:hover': {
      backgroundColor: '#E6E9ED',
    },
  }),
};

export default customStyle;
