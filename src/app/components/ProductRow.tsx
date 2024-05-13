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
    <tr className='hover:bg-gray-200 dark:hover:bg-gray-800 group text-center'>
      <td className='pl-3 sticky left-0 bg-white dark:bg-gray-900 group-hover:bg-gray-200 group-hover:dark:bg-gray-800'>
        {title}
      </td>
      <td>{Math.round((price * (100 - discount)) / 100)}</td>
      <td>{discount}%</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{stock}</td>
      <td>{brand}</td>
      <td>{category}</td>

      <td className='px-2 py-1'>
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
