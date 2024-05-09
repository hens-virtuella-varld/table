'use client';

import { ProductRow } from './components/ProductRow';
import { ThemeTogglerIcon } from './components/ThemeTogglerIcon';

import data from './data.json';

export default function Home() {
  const products = data.products;

  return (
    <main className='p-5 flex md:justify-center dark:bg-black'>
      <button
        className='bg-gray-400 bg-opacity-30 fixed right-6 bottom-6 hover:bg-opacity-50  active:bg-gray-500'
        aria-label='Theme Toggler'
      >
        {<ThemeTogglerIcon className={'w-10 h-10'} />}
      </button>
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
