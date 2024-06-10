import React from 'react';

function ItemList({ items }) {
  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
