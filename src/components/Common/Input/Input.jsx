
import React from 'react';
import styles from './Input.module.css';

function Input({ type = 'text', placeholder, value, onChange, name, style }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      className={styles.input}
    />
  );
}

export default Input;
