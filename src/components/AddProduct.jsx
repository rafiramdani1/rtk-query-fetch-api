import React, { useState } from 'react';
import { useAddProductMutation } from '../features/products/productsApi';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const navigate = useNavigate()
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const [addProduct, { isLoading, isError, error }] = useAddProductMutation();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await addProduct(newProduct).unwrap();
      setNewProduct({
        name: '', price: '', description: '', image: ''
      })
      alert(response.message)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className='px-2'>
      <h1 className='text-neutral-800 text-xl font-medium my-3'>Add Product</h1>
      <div className='border p-3'>

        {isError ?
          <p className='text-sm text-red-500 mb-2 border bg-red-100 p-2 rounded-md'>{error.data.message}</p>
          : ''
        }

        <form onSubmit={handleAddProduct}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Product name</label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="product name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <div className='flex gap-3'>
              <div className='w-1/2'>
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                <input
                  type="text"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='2000000'
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              </div>
              <div className='w-1/2'>
                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image Link</label>
                <input
                  type="text"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder='google.com/image......'
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <textarea
              className='border w-full rounded-md px-1'
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            >
            </textarea>
          </div>

          {isLoading ?
            <button disabled type="button" className=" mt-3 py-2.5 px-5 mr-2 w-full text-sm font-medium text-gray-800 bg-gray-300 rounded-lg border inline-flex items-center justify-center">
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#14b8a6" />
              </svg>
              Loading...
            </button>
            :
            <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add product</button>
          }

        </form>
      </div>

    </section>
  )
}

export default AddProduct