import { productsData } from "../assets/data/Productdata.js";
import "../styles/productCart.css";

import React, { useState } from "react";
import ProductCart from "../utils/ProductCart.js";
import { FaFilter, FaSearch } from "react-icons/fa";
import { Product, ProductCartProps } from "../types/productcartType.js";

const categories = [
  { id: 1, name: "Cardio" },
  { id: 2, name: "Strength" },
  { id: 3, name: "Yoga" },
  { id: 4, name: "Pilates" },
];

const Products: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("ascending");

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setPriceRange((prev) =>
      name === "min" ? [Number(value), prev[1]] : [prev[0], Number(value)]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([10, 100]);
    setSearchQuery("");
    setSortOrder("ascending");
  };

  // Filter products based on selected filters
  const filteredProducts = productsData.filter((product: Product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  // Sort products based on price
  const sortedProducts = filteredProducts.sort((a: Product, b: Product) => {
    return sortOrder === "ascending" ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="mx-auto max-w-7xl mb-10 p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/4 mt-10 mx-auto lg:mx-0">
          <h1 className="text-center mb-3 text-2xl font-semibold">
            Search Your Product
          </h1>
          <div className="p-6 mt-10 bg-white border-1 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold flex items-center">
              <FaFilter className="mr-2" />
              Filters
            </h2>

            <div className="mt-4">
              <h3 className="font-semibold">Categories</h3>
              <div className="flex flex-col mt-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategories.includes(category.name)}
                      onChange={() => toggleCategory(category.name)}
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Price Range</h3>
              <div className="flex flex-col mt-2">
                <label className="flex items-center">
                  <span className="mr-2">Min:</span>
                  <input
                    type="number"
                    name="min"
                    value={priceRange[0]}
                    onChange={handlePriceChange}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </label>
                <label className="flex items-center mt-2">
                  <span className="mr-2">Max:</span>
                  <input
                    type="number"
                    name="max"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 mx-auto">
          <div className="flex items-center mt-7 justify-between flex-wrap">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
              />
              <FaSearch className="absolute left-4 top-3 text-gray-500" />
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <label className="text-gray-700 font-semibold">
                Sort by Price:
              </label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
              <button
                onClick={handleClearFilters}
                className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Clear Filter
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product: ProductCartProps) => (
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
      </div>
    </div>
  );
};

export default Products;
