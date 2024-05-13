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
    <main>
      <button
        className='theme-toggler'
        aria-label='Theme Toggler'
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      >
        {<ThemeTogglerIcon className={'w-10 h-10'} />}
      </button>

      <div className='table-switcher'>
        <button onClick={() => setDivGrid(!divGrid)}>
          Switch to
          {divGrid ? ' <table> element ' : ' <div> element & grid '}
          table
        </button>
      </div>

      {!divGrid && (
        <section className='t-table'>
          <h2>{'Table made with <table> element'}</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
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
          </div>
        </section>
      )}

      {divGrid && (
        <section className='grid-div'>
          <h2>{'Table made with <div> element & grid'}</h2>
          <div className='header z-10'>
            <div className='product-header header-col'>Product</div>
            <div className='header-col'>Price</div>
            <div className='header-col'>Discount</div>
            <div className='header-col'>Original Price</div>
            <div className='header-col'>Rating</div>
            <div className='header-col'>Stock</div>
            <div className='header-col col-span-2'>Brand</div>
            <div className='header-col col-span-2'>Category</div>
            <div className='header-col text-left'>Image</div>
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
