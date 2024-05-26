import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logout } = useContext(authContext)
    const content = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to="dashboard/profile">Profile</Link></li>
                    <li><button onClick={logout}>LogOut</button></li>
                </>
                :
                <li><Link to="/login">Login</Link></li>
        }
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                content
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            content
                        }
                    </ul>
                </div>
                {/* <button className="btn" onClick={() => document.getElementById('delete_modal').showModal()}>Confirm</button> */}
                <div className="navbar-end">
                    {/* <button onClick={() => toast.success('Successfully toasted!')} className="btn">Button</button> */}

                    {/* <dialog id="delete_modal" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-active">Cancel</button>
                                    <button className="btn btn-sm btn-active btn-secondary text-white ms-2">Confirm</button>
                                </form>
                            </div>
                        </div>
                    </dialog> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;