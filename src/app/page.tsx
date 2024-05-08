import data from './data.json';

import { ProductRow } from './components/ProductRow';

export default function Home() {
  const products = data.products;

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <table className='table-fixed'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>discountPercentage</th>
            <th>rating</th>
            <th>stock</th>
            <th>brand</th>
            <th>category</th>
            <th>thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              id={product.id}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
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
