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
    <main className='p-5 block md:justify-center font-mono text-slate-700 dark:text-slate-300'>
      <button
        className='bg-gray-400 z-40 bg-opacity-30 fixed right-6 bottom-6 hover:bg-opacity-50  active:bg-gray-500'
        aria-label='Theme Toggler'
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        {<ThemeTogglerIcon className={'w-10 h-10'} />}
      </button>

      <div className='pb-4 flex lg:justify-center'>
        <button
          className='py-2 px-4 
  bg-amber-200 dark:bg-rose-900 hover:bg-amber-300 dark:hover:bg-rose-950 font-bold  rounded shadow-md dark:shadow-rose-900/50 dark:hover:shadow-rose-950/50'
          onClick={() => setDivGrid(!divGrid)}
        >
          Switch to
          {divGrid ? ' <table> element ' : ' <div> element & grid '}
          table
        </button>
      </div>

      {!divGrid && (
        <section className='t-table'>
          <h2 className='text-2xl py-3 lg:text-center'>
            {'Table made with <table> element'}
          </h2>
          <div className='flex justify-center'>
            <table>
              <thead>
                <tr className='uppercase sticky z-10 top-0 bg-amber-200 dark:bg-rose-950 shadow-lg dark:shadow-rose-950/50 text-center'>
                  <th className='pl-3 sticky z-20 left-0 bg-amber-200 dark:bg-rose-950'>
                    Product
                  </th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Original Price</th>
                  <th>Rating</th>
                  <th>Stock</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th className='pr-3'>Image</th>
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
          </div>
        </section>
      )}

      {divGrid && (
        <section className='min-w-[70rem]'>
          <h2 className='text-2xl py-3 lg:text-center'>
            {'Table made with <div> element & grid'}
          </h2>
          <div className='z-10 grid grid-cols-12 gap-2 items-center h-full text-center font-bold uppercase sticky top-0 bg-amber-200 dark:bg-rose-950 shadow-lg dark:shadow-rose-950/50'>
            <div className='div-header-col col-span-2 sticky left-0 h-full flex justify-center items-center bg-amber-200 dark:bg-rose-950 shadow-lg-r dark:shadow-red-900/50'>
              Product
            </div>
            <div className='div-header-col'>Price</div>
            <div className='div-header-col'>Discount</div>
            <div className='div-header-col'>Original Price</div>
            <div className='div-header-col'>Rating</div>
            <div className='div-header-col'>Stock</div>
            <div className='div-header-col col-span-2'>Brand</div>
            <div className='div-header-col col-span-2'>Category</div>
            <div className='div-header-col text-left'>Image</div>
          </div>
          <div className='relative'>
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
        </section>
      )}
    </main>
  );
}
