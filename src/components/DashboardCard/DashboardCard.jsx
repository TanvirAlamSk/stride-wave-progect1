import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ shoe, handelDelectProduct }) => {
    const { id, model, title } = shoe
    return (
        <tr>
            <th>{id}</th>
            <td>{model}</td>
            <td>{title}</td>
            <td className='flex gap-2'>
                <Link to={`/dashboard/update/${id}`}>
                    <button className='btn btn-sm btn-warning text-white'>Update</button>
                </Link>
                <button onClick={() => handelDelectProduct(id)} className='btn btn-sm btn-error text-white'>Delate</button>
            </td>
        </tr>
    );
};

export default DashboardCard;