import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ProductPage = () => {
    const loaderData = useLoaderData()
    const params = useParams()
    // console.log(params)
    const { id, model, title, price, description, image } = loaderData
    return (
        <div className='my-10'>
            <div className="card w-full md:w-7/12 px-2 mx-auto glass">
                <figure><img src={image} className='w-full md:w-3/4' alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="card-subtitle font-medium">Model : {model}</h3>
                    <h3 className="card-subtitle font-medium">Price : {price}</h3>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary font-bold">Buy now!</button>
                    </div>
                </div>
            </div>
            <Link to="/"><button className="ms-72 rounded mt-6 border border-solid border-lime-600 px-6 py-3">Back</button></Link>
        </div>
    );
};

export default ProductPage;