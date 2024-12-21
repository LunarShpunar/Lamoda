
import React from 'react';
import Input from '../../Common/Input/Input';
import styles from './SearchFilter.module.css';

function SearchFilter({ search, setSearch }) {
  return (
    <div className={styles.searchFilter}>
      <Input
        placeholder="Поиск"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}

export default SearchFilter;
