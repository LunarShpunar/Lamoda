import React from 'react';
import styles from './CheckBox.module.css';

function Checkbox({ label, checked, onChange }) {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <label htmlFor={label} className={styles.customCheckbox}>
        <span className={styles.checkmark}></span>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
