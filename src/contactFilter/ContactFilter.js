import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactFilter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <form className={style.filterForm}>
      <label className={style.filterLabel}>
        Find contacts by name
        <br />
        <input
          className={style.filterInput}
          type="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
        ></input>
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
