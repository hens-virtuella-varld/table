import React from 'react';
import { ProductRowProps } from '../types';

export const ProductRow = ({
  title,
  price,
  discount,
  rating,
  stock,
  brand,
  category,
  thumbnail,
}: ProductRowProps) => {
  return (
    <tr>
      <td>
        {title}
      </td>
      <td>{Math.round((price * (100 - discount)) / 100)}</td>
      <td>{discount}%</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{stock}</td>
      <td>{brand}</td>
      <td>{category}</td>

      <td>
        <a className='lg:hidden' href={thumbnail} target='_blank'>
          Link
        </a>
        <a className='max-lg:hidden' href={thumbnail} target='_blank'>
          <img src={thumbnail} width='50' />
        </a>
      </td>
    </tr>
  );
};
