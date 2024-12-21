import React from 'react';
import styles from './Button.module.css';

function Button({ children, onClick, style, className }) {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
