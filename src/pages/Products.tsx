import { productsData } from "../assets/data/Productdata.js";
import "../styles/productCart.css";

import React from "react";
import ProductCart from "../utils/ProductCart.js";
import { FaSearch } from "react-icons/fa";

const Products: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center justify-center ">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
          />
          <FaSearch className="absolute left-4 top-3 text-gray-500" />
        </div>
      </div>

      <div className=" mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <ProductCart
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              images={product.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
