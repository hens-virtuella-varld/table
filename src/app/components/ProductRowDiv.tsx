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
    <div className=' grid grid-cols-12 gap-2 items-center text-center p-2  border-b-2 border-solid border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'>
      <div className='col-span-2 sticky left-0 z-10 bg-white dark:bg-gray-900'>
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
