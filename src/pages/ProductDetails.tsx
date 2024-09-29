/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/productApi.js";
import { useAppDispatch, useAppSelector } from "../redux/hooks.js";
import { addToCart } from "../redux/features/cart/cartSlice.js";
import { toast } from "sonner";

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.products) || [];
  const [mainImage, setMainImage] = useState<string>("");

  const { _id } = useParams<{ _id: string }>(); // Get product ID from URL

  const { data: productData, error, isLoading } = useGetProductByIdQuery(_id);

  useEffect(() => {
    if (productData?.data?.images && productData?.data?.images.length > 0) {
      setMainImage(productData?.data?.images[0]); // Set the first image as the main image
    }
  }, [productData?.data?.images]);

  const changeImage = (src: string) => {
    setMainImage(src);
  };

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details. Please try again later.</div>;
  }

  if (!productData) {
    return <div className="text-center">Product not found</div>;
  }

  const product = productData.data;

  // Find the product in the cart
  const cartItem = cartItems.find((item: any) => item._id === product._id);
  const productQuantityInCart = cartItem ? cartItem.stockQuantity : 0;

  const handleAddToCart = (e: any, product: any) => {
    e.stopPropagation();

    const totalQuantityInCart = productQuantityInCart + 1;
    if (totalQuantityInCart > product.stockQuantity) {
      alert("Not enough product available!");
      return;
    }
    toast.success("product added successfully");
    // Dispatch action to add the product to cart
    dispatch(
      addToCart({
        ...product,
        stockQuantity: product.stockQuantity - totalQuantityInCart,
      })
    ); // Pass the available quantity
  };

  const isOutOfStock = productQuantityInCart >= product.stockQuantity;

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt={product?.name}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {product?.images.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{product?.name}</h2>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product?.price}</span>
            </div>

            <p className="text-gray-700 mb-6">
              Stock: {product?.stockQuantity}
            </p>
            <p className="text-gray-700 mb-6">{product?.description}</p>
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-12 text-center rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <button
                onClick={(e) => handleAddToCart(e, product)}
                disabled={isOutOfStock}
                className={`bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none ${
                  isOutOfStock ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isOutOfStock ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside  text-gray-700">
                <li>
                  Durable Build – Strong materials ensure long-lasting use.
                </li>
                <li>
                  Adjustable Resistance – Multiple levels for all fitness
                  abilities.
                </li>
                <li>
                  Ergonomic Design – Comfortable and supportive during workouts.
                </li>
                <li>Compact & Foldable – Easy to store in small spaces.</li>
                <li>Multi-Functionality – Supports various exercises.</li>
                <li>
                  Smart Connectivity – Syncs with apps and fitness trackers.
                </li>
                <li>Safety Features – Emergency stop and safety locks.</li>
                <li>
                  Warranty & Support – Backed by a manufacturer’s warranty.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
