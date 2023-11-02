import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const PaginationContainerUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageNumber = styled.li`
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  list-style: none;
  padding: 8px;
  margin: 2px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#007bff' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : 'inherit')};
`;

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PaginationContainer>
      <PaginationContainerUL>
        {pageNumbers.map((number) => (
          <PageNumber
            key={number}
            onClick={() => handlePageClick(number)}
            isActive={number === currentPage}
          >
            {number}
          </PageNumber>
        ))}
      </PaginationContainerUL>
    </PaginationContainer>
  );
};

export default Pagination;
