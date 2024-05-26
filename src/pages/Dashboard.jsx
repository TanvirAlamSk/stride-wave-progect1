import { useLoaderData } from "react-router-dom";
import DashboardCard from "../components/DashboardCard/DashboardCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Profile from "./Profile";

const Dashboard = () => {

    return (
        <div className="">
            <Profile></Profile>
        </div>
    );
};

export default Dashboard;