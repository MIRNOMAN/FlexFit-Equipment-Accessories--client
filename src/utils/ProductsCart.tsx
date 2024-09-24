import { Button } from "antd";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type TProduct = {
  image: string;
  name: string;
  price: number;
};

type ProductFeatureProps = {
  product: TProduct;
};

const ProductsCart: React.FC<ProductFeatureProps> = ({ product }) => {
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
      className="opacity-0 bg-white rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl animate-fadeIn"
    >
      {/* Image with zoom animation */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover animate-zoomIn"
      />
      <div className="p-4">
        {/* Name with slide-in animation */}
        <h3 className="text-lg font-semibold animate-slideIn">
          {product.name}
        </h3>
        <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
        <Button
          onClick={handleViewDetails}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductsCart;
