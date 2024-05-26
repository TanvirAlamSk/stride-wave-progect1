import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ shoe, handelDelectProduct }) => {
    const { id, model, title, price } = shoe
    return (
        <tr>
            <th>{id}</th>
            <td>{model}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td className='flex gap-2'>
                <Link to={`/dashboard/update/${id}`}>
                    <button className='btn btn-sm btn-success text-white'>Update</button>
                </Link>
                <button onClick={() => document.getElementById(`delete_modal${id}`).showModal()} className='btn btn-sm btn-error text-white'>Delate</button>
            </td>
            <dialog id={`delete_modal${id}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <p className="py-4 text-red-400 text-lg font-semibold">Are you sure  to delete this product</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-sm btn-active">Cancel</button>
                            <button onClick={() => handelDelectProduct(id)} className="btn btn-sm btn-active btn-secondary text-white ms-2">Confirm</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </tr>
    );
};

export default DashboardCard;