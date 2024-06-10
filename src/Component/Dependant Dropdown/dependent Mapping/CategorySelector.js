import React from 'react';

function CategorySelector({ categories, onCategoryChange, selectedCategory }) {
  return (
    <div>
      <h2>Select Category</h2>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
