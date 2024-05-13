import React, { useState } from 'react';

const Filter = ({ options, onFilter }) => {
  return (
    <select onChange={(e) => onFilter(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const ProductList = ({ products }) => {
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const handleFilterChange = (filterName, newValue) => {
    if (filterName === 'price') setSelectedPrice(newValue);
    if (filterName === 'type') setSelectedType(newValue);
    if (filterName === 'size') setSelectedSize(newValue);
  };

  const filteredProducts = products.filter((product) => {
    const priceMatch = selectedPrice === 'all' || product.price === selectedPrice;
    const typeMatch = selectedType === 'all' || product.type === selectedType;
    const sizeMatch = selectedSize === 'all' || product.size === selectedSize;

    return priceMatch && typeMatch && sizeMatch;
  });

  return (
    <div>
      <Filter
        options={['all', '0-100', '101-500', '501-1000', '1001-1500']}
        onFilter={(value) => handleFilterChange('price', value)}
      />
      <Filter
        options={['all', 'Jacket', 'Coat', 'Blazer']}
        onFilter={(value) => handleFilterChange('type', value)}
      />
      <Filter
        options={['all', 'S', 'M', 'L', 'XL']}
        onFilter={(value) => handleFilterChange('size', value)}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            {product.price} - {product.type} - {product.size}
          </div>
        ))}
      </div>
    </div>
  );
};

const products = [
  { id: 1, price: '0-100', type: 'Jacket', size: 'S' },
  { id: 2, price: '101-500', type: 'Coat', size: 'M' },
  { id: 3, price: '501-1000', type: 'Blazer', size: 'L' },
  { id: 4, price: '1001-1500', type: 'Jacket', size: 'XL' },
];

function App() {
  return <ProductList products={products} />;
}

export default App;