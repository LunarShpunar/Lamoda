
import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = React.memo(({ product }) => {
  return (
    <div className={styles.productItem}>
      <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p>{product.description}</p>
      <p>Цвет: {product.color}</p>
      <p className={styles.productPrice}>Цена: {product.price} руб.</p>
      <p>Рейтинг: {product.rating}</p>
    </div>
  );
});

export default ProductItem;
