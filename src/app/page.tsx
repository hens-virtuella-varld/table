'use client';

import { ProductRow } from './components/ProductRow';

import data from './data.json';

export default function Home() {
  const products = data.products;

  return (
    <main className='p-5 flex md:justify-center'>
      <table className='text-left'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th className='pr-3'>Price</th>
            <th className='pr-3'>Discount</th>
            <th className='pr-3'>Original Price</th>
            <th className='pr-3'>Rating</th>
            <th className='pr-3'>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              id={product.id}
              title={product.title}
              price={product.price}
              discount={product.discountPercentage}
              rating={product.rating}
              stock={product.stock}
              brand={product.brand}
              category={product.category}
              thumbnail={product.thumbnail}
              className={'py-3 pr-2'}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
