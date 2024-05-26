import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Product from "../components/home/Product";
import QuestionSection from "../components/home/QuestionSection";

const Home = () => {
    const loderData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="text-center text-2xl font-bold">All Products</div>
            <Product loderData={loderData}></Product>
            <QuestionSection></QuestionSection>
        </div>
    );
};

export default Home;