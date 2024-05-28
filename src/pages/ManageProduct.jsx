import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import DashboardCard from '../components/DashboardCard/DashboardCard';

const ManageProduct = () => {
    const [shoes, setShoes] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/shoes")
            .then((response) => response.json())
            .then((data) => setShoes(data))
    }, [])

    const handelDelectProduct = (id) => {
        fetch(`http://localhost:3000/shoes/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                const restShoes = shoes.filter((shoe) => shoe.id != id)
                setShoes(restShoes)
                toast.success("product delete successful")
            })
    }
    return (
        <div className="w-3/4 mx-auto mt-12">
            <h3 className="text-2xl text-center">Manage All Product</h3>
            <div >
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Model</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoes.map((shoe) => <DashboardCard key={shoe.id} shoe={shoe}
                                    handelDelectProduct={handelDelectProduct}
                                ></DashboardCard>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;