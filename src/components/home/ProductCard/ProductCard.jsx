import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ data }) => {
    const { id, title, description, image } = data
    const location = useLocation()
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} className="h-96 w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 50)}...</p>
                <div className="card-actions justify-end">
                    <Link state={location.pathname} to={`/product/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;