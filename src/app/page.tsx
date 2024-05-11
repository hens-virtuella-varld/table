'use client';

import { useTheme } from 'next-themes';

import { ProductRow } from './components/ProductRow';
import { ThemeTogglerIcon } from './components/ThemeTogglerIcon';

import data from './data.json';

export default function Home() {
  const { theme, setTheme } = useTheme();

  const products = data.products;

  return (
    <main className='p-5 flex md:justify-center font-mono text-slate-700 dark:text-slate-300'>
      <button
        className='bg-gray-400 bg-opacity-30 fixed right-6 bottom-6 hover:bg-opacity-50  active:bg-gray-500'
        aria-label='Theme Toggler'
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        {<ThemeTogglerIcon className={'w-10 h-10'} />}
      </button>
      <table className='text-left'>
        <thead>
          <tr className='uppercase sticky top-0 bg-green-200 dark:bg-emerald-800 shadow-xl dark:shadow-emerald-800/50'>
            <th className='sticky left-0 bg-green-200 dark:bg-emerald-800'>
              Title
            </th>
            <th>Price</th>
            <th>Discount</th>
            <th>Original Price</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              title={product.title}
              price={product.price}
              discount={product.discountPercentage}
              rating={product.rating}
              stock={product.stock}
              brand={product.brand}
              category={product.category}
              thumbnail={product.thumbnail}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
