import { Button } from "antd";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ProductsCart = ({ product }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  // Use the scroll animation hook for the product card
  useScrollAnimation(cardRef, "animate-fadeInUp");

  const handleViewDetails = () => {
    navigate(`/products`);
  };
  return (
    <div
      ref={cardRef}
      className="opacity-0 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
        <button
          onClick={handleViewDetails}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductsCart;
