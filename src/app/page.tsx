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
        <button onClick={() => setDivGrid(!divGrid)} className='table-switcher'>
          Switch to
          {divGrid ? ' <table> element ' : ' <div> element & grid '}
          table
        </button>
      </div>

      {!divGrid && (
        <section className='table'>
          <h2>{'Table made with <table> element'}</h2>
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
        <section className='grid-div'>
          <h2>{'Table made with <div> element & grid'}</h2>
          <div className='header'>
            <div className='product-header'>Product</div>
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
        </section>
      )}
    </main>
  );
}
