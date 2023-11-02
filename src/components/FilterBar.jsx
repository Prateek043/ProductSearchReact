import React from 'react';
import styled from 'styled-components';

const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #2163DD;
  color:#fff;
  font-size:24px;
  font-weight:600px;
  font-family:sans-serif;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const FilterBar = ({ filters, setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, price: e.target.value });
  };

  return (
    <FilterBarContainer>
      <Label>Category:</Label>
      <Select value={filters.category} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
      </Select>
      <Label>Max Price:</Label>
      <Input
        type="number"
        value={filters.price}
        onChange={handlePriceChange}
      />
    </FilterBarContainer>
  );
};

export default FilterBar;
