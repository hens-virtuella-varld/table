'use client';

import { useTheme } from 'next-themes';

import { ProductRow } from './components/ProductRow';
import { ThemeTogglerIcon } from './components/ThemeTogglerIcon';

import data from './data.json';
import { ProductRowDiv } from './components/ProductRowDiv';

export default function Home() {
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

      <section>
        <h2 className='text-center'>Table made with table element</h2>
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
      <section>
        <h2 className='text-center'>Table made with div element and flex</h2>
        <div>
          <div className='header-row flex'>
            <div>Product</div>
            <div>Price</div>
            <div>Discount</div>
            <div>Original Price</div>
            <div>Rating</div>
            <div>Stock</div>
            <div>Brand</div>
            <div>Category</div>
            <div>Image</div>
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
    </main>
  );
}
