import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
`;

const Card = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h5`
  font-size: 20px;
  margin: 8px 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin: 8px 0;
  color: #666;
`;

const CardPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  margin: 8px 0;
`;

const RecipeReviewCard = ({ products }) => {
  return (
    <Container>
      <Title>Products</Title>
      <CardContainer>
        {products.map((product, idx) => (
          <Card key={idx}>
            <CardImage src={product.images[0]} alt={product.title} />
            <CardBody>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
              <CardPrice>${product.price}</CardPrice>
            </CardBody>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default RecipeReviewCard;
