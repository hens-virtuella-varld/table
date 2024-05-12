import React from 'react';
import { ProductRowProps } from '../types';

export const ProductRowDiv = ({
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
    <div className='flex'>
      <div>{title}</div>
      <div>{Math.round((price * (100 - discount)) / 100)}</div>
      <div>{discount}%</div>
      <div>{price}</div>
      <div>{rating}</div>
      <div>{stock}</div>
      <div>{brand}</div>
      <div>{category}</div>

      <div>
        <a className='lg:hidden' href={thumbnail} target='_blank'>
          Link
        </a>
        <a className='max-lg:hidden' href={thumbnail} target='_blank'>
          <img src={thumbnail} width='50' />
        </a>
      </div>
    </div>
  );
};
