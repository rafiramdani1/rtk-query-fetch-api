import React from 'react';
import { useGetProductsQuery, useDeleteProductMutation } from './productsApi';
import { Link } from 'react-router-dom';

const ProductsList = ({ product }) => {

  const { refetch } = useGetProductsQuery();
  const [deleteProduct, { isLoading, isError }] = useDeleteProductMutation();

  const handleDeleteProduct = async (productId) => {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      try {
        await deleteProduct(productId);
        await refetch();
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <tbody>
      <tr className="bg-white border-b" key={product.id}>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          {product.name}
        </th>
        <td className="px-6 py-4">
          {product.price}
        </td>
        <td className="px-6 py-4 flex gap-2">
          <Link to={`/products/${product.id}`}
            className='hover:text-teal-500'
          >Show</Link>
          <Link to={`/products/edit/${product.id}`} className='hover:text-green-500' disabled={isLoading}>Edit</Link>
          <button
            onClick={() => handleDeleteProduct(product.id)} className='hover:text-red-500'
            disabled={isLoading}
          >Delete</button>
        </td>
      </tr>
    </tbody>

  );
};

export default ProductsList;