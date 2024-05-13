import React from 'react';

const Product = ({ product, onFilter }) => {
  const { price, type, size } = product;

  return (
    <div
      className="product"
      data-price={price}
      data-type={type}
      data-size={size}
      onClick={() => onFilter(product)}
    >
      {price} - {type} - {size}
    </div>
  );
};

export default Product;