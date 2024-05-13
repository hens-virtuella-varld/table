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
    <div className='div-row group h-full'>
      <div className='title-col group-hover:bg-gray-200 group-hover:dark:bg-gray-800 shadow-lg-r h-full'>
        {title}
      </div>
      <div>{Math.round((price * (100 - discount)) / 100)}</div>
      <div>{discount}%</div>
      <div>{price}</div>
      <div>{rating}</div>
      <div>{stock}</div>
      <div className='col-span-2'>{brand}</div>
      <div className='col-span-2'>{category}</div>

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
