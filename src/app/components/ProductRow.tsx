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
}: ProductRowProps) => {
  return (
    <tr className=' even:bg-amber-200 dark:even:bg-yellow-800'>
      <td>{title}</td>
      <td>{Math.round((price * (100 - discount)) / 100)}</td>
      <td>{discount}%</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{stock}</td>
      <td>{brand}</td>
      <td>{category}</td>

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
