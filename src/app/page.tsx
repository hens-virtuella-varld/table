'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';

import { ProductRow } from './components/ProductRow';
import { ProductRowDiv } from './components/ProductRowDiv';
import { ThemeTogglerIcon } from './components/ThemeTogglerIcon';

import data from './data.json';

export default function Home() {
  const [divGrid, setDivGrid] = useState(false);
  const { theme, setTheme } = useTheme();

  const products = data.products;

  return (
    <main className='flex flex-col'>
      <button
        className='theme-toggler'
        aria-label='Theme Toggler'
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        {<ThemeTogglerIcon className={'w-10 h-10'} />}
      </button>

      <div className='pb-4'>
        <button
          onClick={() => setDivGrid(!divGrid)}
          className='bg-amber-200 dark:bg-rose-900 hover:bg-amber-300 dark:hover:bg-rose-950 font-bold py-2 px-4 rounded'
        >
          Switch to
          {divGrid ? ' <table> element ' : ' <div> element & grid '}
          table
        </button>
      </div>

      {!divGrid && (
        <section>
          <h2 className='text-2xl py-3 text-center '>
            {'Table made with <table> element'}
          </h2>
          <table>
            <thead>
              <tr>
                <th className='sticky z-20 left-0 bg-amber-200 dark:bg-rose-950 shadow-lg-r'>
                  Product
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
        </section>
      )}

      {divGrid && (
        <section className='min-w-[70rem]'>
          <h2 className='text-2xl py-3  md:text-center'>
            {'Table made with <div> element & grid'}
          </h2>
          <div>
            <div className='grid grid-cols-12 gap-2 items-center px-2 py-3 text-center font-bold uppercase sticky z-10 top-0 bg-amber-200 dark:bg-rose-950 shadow-lg dark:shadow-rose-950/50'>
              <div className='col-span-2 sticky z-20 left-0 bg-amber-200 dark:bg-rose-950'>
                Product
              </div>
              <div>Price</div>
              <div>Discount</div>
              <div>Original Price</div>
              <div>Rating</div>
              <div>Stock</div>
              <div className='col-span-2'>Brand</div>
              <div className='col-span-2'>Category</div>
              <div className='text-left'>Image</div>
            </div>
            <div>
              {products.map((product) => (
                <ProductRowDiv
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
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
