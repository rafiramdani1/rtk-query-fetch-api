import React, { useEffect } from 'react';
import ProductsList from '../features/products/productsList';
import { useGetProductsQuery } from '../features/products/productsApi';
import { Link } from 'react-router-dom';

const Products = () => {
  const { data: products, refetch, isLoading } = useGetProductsQuery();

  useEffect(() => {
    refetch();
  }, [products])

  return (
    <>
      <section className='px-2'>
        <h1 className='text-gray-800 font-bold text-xl my-2'>Products List</h1>

        <Link to={'/add-product'} className='border px-2 rounded-md py-1 font-medium bg-teal-500 text-white'>+ product</Link>

        <div className="border rounded-md relative overflow-x-auto mt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>

            {products?.map(product => (
              <ProductsList key={product.id} product={product} />
            ))}

          </table>
        </div>

        {isLoading ?
          <p className='text-center font-medium text-xs text-gray-500 mt-2'>Loading...</p>
          : ''
        }

      </section>
    </>
  );
};

export default Products;