import React, { useEffect, useState } from 'react';
import RecipeReviewCard from './components/RecipeReviewCard';
import FilterBar from './components/FilterBar';
import Pagination from './components/Pagination';

function App() {
  const productsData = [
    { id: 1, title: 'Product 1', description: 'Description 1', price: 100, category: 'Category 1' },
  ];
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', price: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const response = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      if (res.ok) {
        const result = await res.json();
        setProducts(result.products); 
      } else {
        console.error('Network response was not ok:', res.status);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    response();
  }, []);
  const filteredProducts = products
  .filter((product) => !filters.category || product.category === filters.category)
  .filter((product) => !filters.price || product.price <= filters.price);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters} />
      <RecipeReviewCard products={currentItems} />
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
