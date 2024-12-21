import React, { useState, useMemo } from 'react';
import { products as initialProducts } from './data';
import ProductList from './components/ProductList/ProductList';
import SearchFilter from './components/Filters/SearchFilter/SearchFilter';
import ColorFilter from './components/Filters/ColorFilter';
import PriceFilter from './components/Filters/PriceFilter';
import Sort from './components/Sorting/Sort';
import './styles.css';

function App() {
  const [search, setSearch] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 9999 });
  const [sortType, setSortType] = useState('priceAsc');

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) || 
        product.description.toLowerCase().includes(search.toLowerCase())
      )
      .filter(product =>
        selectedColors.length === 0 || selectedColors.includes(product.color)
      )
      .filter(product =>
        product.price >= priceRange.min && product.price <= priceRange.max
      )
      .sort((a, b) => {
        if (sortType === 'priceAsc') return a.price - b.price;
        if (sortType === 'priceDesc') return b.price - a.price;
        if (sortType === 'ratingDesc') return b.rating - a.rating;
        return 0;
      });
  }, [search, selectedColors, priceRange, sortType]);

  return (
    <div className="app">
      <div className="filters">
        <div className="search-filter">
          <SearchFilter search={search} setSearch={setSearch} />
        </div>
        <div className="sidebar-filters">
          <ColorFilter selectedColors={selectedColors} setSelectedColors={setSelectedColors} />
          <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
        </div>
      </div>
      <Sort sortType={sortType} setSortType={setSortType} />
      <ProductList products={filteredProducts} />
      <p>Всего продуктов: {filteredProducts.length}</p>
    </div>
  );
}

export default App;
