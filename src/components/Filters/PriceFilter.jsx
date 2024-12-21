
import React from 'react';

function PriceFilter({ priceRange, setPriceRange }) {
  const handleChange = e => {
    const { name, value } = e.target;
    setPriceRange(prev => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <div>
      <h4>По цене</h4>
      <input
        type="number"
        name="min"
        placeholder="От"
        value={priceRange.min}
        onChange={handleChange}
      />
      <input
        type="number"
        name="max"
        placeholder="До"
        value={priceRange.max}
        onChange={handleChange}
      />
    </div>
  );
}

export default PriceFilter;
