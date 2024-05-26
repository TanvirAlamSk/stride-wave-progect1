import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../components/home/ProductCard/ProductCard';

const AllProducts = () => {
    const shoes = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-6 mx-6">

                {
                    shoes.map((shoe) => <ProductCard key={shoe.id} data={shoe}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;