/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(authContext)
    const location = useLocation()
    if (loader) {
        return <h2>Loading...</h2>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

};

export default PrivateRouter;