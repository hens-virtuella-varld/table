import clsx from 'clsx';
import React from 'react';

interface ProductRowProps {
  title: string;
  price: number;
  discount: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  className?: string;
}

export const ProductRow = ({
  title,
  price,
  discount,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  className,
}: ProductRowProps) => {
  return (
    <tr className=' even:bg-amber-200 dark:even:bg-yellow-800'>
      <td className={clsx(className)}>{title}</td>
      <td className={clsx(className)}>
        {Math.round((price * (100 - discount)) / 100)}
      </td>
      <td className={className}>{discount}%</td>
      <td className={className}>{price}</td>
      <td className={className}>{rating}</td>
      <td className={className}>{stock}</td>
      <td className={className}>{brand}</td>
      <td className={className}>{category}</td>

      <td>
        <a className='lg:hidden p-2' href={thumbnail} target='_blank'>
          Link
        </a>
        <a
          className='max-lg:hidden flex justify-end'
          href={thumbnail}
          target='_blank'
        >
          <img src={thumbnail} width='50' />
        </a>
      </td>
    </tr>
  );
};
