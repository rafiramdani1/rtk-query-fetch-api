import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../features/products/productsApi';

const ShowProduct = () => {

  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  let content;
  if (isLoading) {
    content = <p className='text-center font-medium text-xs text-gray-500 mt-2'>Loading...</p>
  } else {
    console.log(product)
    content =
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={product.image} alt="" />
        <div className="flex flex-col justify-start p-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.name}</h5>
          <p className="mb-3 font-normal text-gray-700">{product.description}</p>
          <p className="mb-3 font-normal text-gray-700 text-xl">Rp{product.price}</p>
        </div>
      </div>
  }

  return (
    <section className='px-2'>
      <h1 className='text-gray-800 text-xl font-medium my-2'>Detail Product</h1>
      {content}
    </section>

  );
};

export default ShowProduct;