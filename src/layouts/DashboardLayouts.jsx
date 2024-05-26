import { Link, Outlet } from "react-router-dom";

const DashboardLayouts = () => {
    return (
        <div>
            <div className="">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden float-end m-6">Open drawer</label>
            </div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex-col justify-between">
                        <div>
                            <li><Link to="/dashboard">Profile</Link></li>
                            <li><Link to="/dashboard/manage-product">Manage Product</Link></li>
                            <li><Link to="/dashboard/add-product">Add Product</Link></li>
                        </div>

                        <li className="bottom-1"><Link to="/">Go To Home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayouts;