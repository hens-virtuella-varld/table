'use client';

import { useTheme } from 'next-themes';

import { ProductRow } from './components/ProductRow';
import { ThemeTogglerIcon } from './components/ThemeTogglerIcon';

import data from './data.json';

export default function Home() {
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
    </main>
  );
}
