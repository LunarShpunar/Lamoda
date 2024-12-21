
import React from 'react';
import ProductItem from './ProductItem';


function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => <ProductItem key={product.id} product={product} />)
      ) : (
        <p>По вашему запросу ничего не найдено.</p>
      )}
    </div>
  );
}

export default ProductList;
