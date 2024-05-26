import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const data = useLoaderData()
    const { id, model, title, price, image, description } = data
    const handelUpdateProduct = (event) => {
        event.preventDefault();
        const model = event.target.model.value
        const title = event.target.title.value
        const price = event.target.price.value
        const image = event.target.image.value
        const description = event.target.description.value
        const updateProduct = {
            model,
            title,
            price,
            image,
            description
        }
        fetch(`http://localhost:3000/shoes/${id}`, {
            method: "PATCH",
            header: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(updateProduct)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                toast.success("Product update successfully")
            })
    }
    return (
        <div className='md:w-2/3 mx-auto my-10 p-6 border border-solid rounded-md'>
            <h2 className='text-2xl font-semibold text-center'>Update Product</h2>
            <form onSubmit={handelUpdateProduct} className="card-body pb-0">
                <div className='flex flex-col md:flex-row w-full gap-6 mt-5 justify-around'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Model</label>
                        <input name='model' type="text" defaultValue={model} className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Title</label>
                        <input name='title' type="text" defaultValue={title} className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-6 justify-around mt-6'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Price</label>
                        <input name='price' defaultValue={price} type="text" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Image</label>
                        <input name='image' defaultValue={image} type="text" className="input input-bordered  w-full" />
                    </div>

                </div>
                <div className='mt-10'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Description</label>
                        <textarea name='description' defaultValue={description} type="text" className="textarea textarea-bordered w-full h-36" ></textarea>
                    </div>
                    <button type='submit' className='w-full btn btn-info text-white my-4'> Update Product </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;