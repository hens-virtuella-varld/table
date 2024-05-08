import React from 'react';

interface ProductRowProps {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export const ProductRow = ({
  id,
  title,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
}: ProductRowProps) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{discountPercentage}</td>
      <td>{rating}</td>
      <td>{stock}</td>
      <td>{brand}</td>
      <td>{category}</td>
      <td>{thumbnail}</td>
    </tr>
  );
};
