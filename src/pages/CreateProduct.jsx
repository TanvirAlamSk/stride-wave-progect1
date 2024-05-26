import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useShoes } from '../hooks/useShoes';
import toast from 'react-hot-toast';
import Modal from '../components/Shared/Modal';

const CreateProduct = () => {
    const shoes = useLoaderData()
    const [shoesdata, setShoesdata] = useState(true)

    const handelAddProduct = (event) => {
        event.preventDefault();
        const model = event.target.model.value
        const title = event.target.title.value
        const price = event.target.price.value
        const image = event.target.image.value
        const description = event.target.description.value

        const newProduct = {
            id: `${shoes.length + 1}`,
            model,
            title,
            price,
            description,
            image
        }
        if (model === "" || title === "" || price === "" || image === "" || description === "") {
            setTimeout(() => {
                setShoesdata(true)
            }, 200)

            return toast.error("please fill up all input section")
        }

        fetch("http://localhost:3000/shoes", {
            method: "POST",
            header: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then((response) => response.json())
            .then((result) => {
                if (result) {
                    toast.success("product Added Successfully")
                    setShoesdata(true)
                    event.target.reset()
                }
            })


    }
    return (
        <div className='md:w-2/3 mx-auto my-10 p-6 border border-solid rounded-md'>
            <h2 className='text-2xl font-semibold text-center'>Add A New Product</h2>
            <form onSubmit={handelAddProduct} className="card-body pb-0">
                <div className='flex flex-col md:flex-row w-full gap-6 mt-5 justify-around'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Model</label>
                        <input name='model' type="text" placeholder="model" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Title</label>
                        <input name='title' type="text" placeholder="title" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-6 justify-around mt-6'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Price</label>
                        <input name='price' type="text" placeholder="price" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className='text-gray-500'>Image</label>
                        <input name='image' type="text" placeholder="image" className="input input-bordered  w-full" />
                    </div>

                </div>
                <div className='mt-10'>
                    <div className='w-full'>
                        <label className='text-gray-500'>Description</label>
                        <textarea name='description' type="text" placeholder="description" className="textarea textarea-bordered w-full h-36"></textarea>
                    </div>

                </div>
                {
                    shoesdata && <Modal> Click "Confirm" for add this product</Modal>
                }
            </form>
            <div className='px-8'>
                <button onClick={() => document.getElementById("update_modal").showModal()} className='w-full btn btn-info text-white my-4'>Add Product</button>
            </div>
        </div>
    );
};

export default CreateProduct;