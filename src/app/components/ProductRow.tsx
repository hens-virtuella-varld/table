import clsx from 'clsx';
import React from 'react';

interface ProductRowProps {
  id: number;
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
  id,
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
    <tr className=' even:bg-amber-200 dark:even:bg-amber-600'>
      <td className={clsx(className)}>{id}</td>
      <td className={clsx(className)}>{title}</td>
      <td className={clsx(className)}>
        {Math.round((price * (100 - discount)) / 100)}
      </td>
      <td className={clsx(className)}>{discount}%</td>
      <td className={clsx(className)}>{price}</td>
      <td className={clsx(className)}>{rating}</td>
      <td className={clsx(className)}>{stock}</td>
      <td className={clsx(className)}>{brand}</td>
      <td className={clsx(className)}>{category}</td>

      <td className={clsx(className)}>
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
