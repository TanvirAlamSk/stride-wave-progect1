import { Link } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const Product = ({ loderData }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-6 mx-6">

                {
                    loderData.slice(0, 3).map((data) => <ProductCard key={data.id} data={data}></ProductCard>)
                }
            </div>
            <div className="mt-8 flex justify-center">
                <Link to="all-products" className="btn- btn-outline bg-sky-700 px-6 py-3 m-8 rounded text-white">See All Products</Link>
            </div>
        </div>
    );
};

export default Product;