
import React, { useMemo } from 'react';
import Button from '../Common/Button/Button';
import styles from './Sort.module.css';

function Sort({ sortType, setSortType }) {
  
  const sortButtons = useMemo(() => {
    const buttons = [
      { type: 'priceAsc', label: 'Сначала дешевые' },
      { type: 'priceDesc', label: 'Сначала дорогие' },
      { type: 'ratingDesc', label: 'Сначала популярные' },
    ];

    return buttons.map(({ type, label }) => (
      <Button
        key={type}
        onClick={() => setSortType(type)}
        className={sortType === type ? styles.active : ''}
      >
        {label}
      </Button>
    ));
  }, [sortType, setSortType]);

  return <div className={styles.sortButtons}>{sortButtons}</div>;
}

export default Sort;
