import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import ItemList from './ItemList';

const data = [
  { category: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
  { category: 'Vegetables', items: ['Carrot', 'Lettuce', 'Spinach'] },
  { category: 'Dairy', items: ['Milk', 'Cheese', 'Yogurt'] }
];

function DependantMappingParrent() {
  const [selectedCategory, setSelectedCategory] = useState(data[0].category);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const items = data.find(cat => cat.category === selectedCategory)?.items || [];

  return (
    <div>
      <h1>Dependent Mapping Example</h1>
      <CategorySelector
        categories={data.map(cat => cat.category)}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <ItemList items={items} />
    </div>
  );
}

export default DependantMappingParrent;
