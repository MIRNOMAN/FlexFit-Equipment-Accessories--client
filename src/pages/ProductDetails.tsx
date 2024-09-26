import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/productApi.js";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState<string>("");
  const { _id } = useParams<{ _id: string }>(); // Get product ID from URL

  const { data: productData, error, isLoading } = useGetProductByIdQuery(_id);

  useEffect(() => {
    if (productData?.data?.images && productData?.data?.images.length > 0) {
      setMainImage(productData?.data?.images[0]); // Set the first image as the main image
    }
  }, [productData?.data?.images]);

  console.log(productData?.data?.images);
  console.log(mainImage);
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
    return <div>Product not found.</div>;
  }

  if (!productData) {
    return <div className="text-center">Product not found</div>;
  }
  // Fetch product based on ID
  // const product = productData?.data?.find(
  //   (item: { id: number }) => item.id === Number(_id)
  // );

  const product = productData.data;

  // useEffect(() => {
  //   if (product?.images && product?.images.length > 0) {
  //     setMainImage(product?.images[0]); // Set the main image when product is available
  //   }
  // }, [product]);

  // useEffect(() => {
  //   setMainImage(product.images[0]); // Set the main image when product is available
  // }, [product]);

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
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none">
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none">
                Wishlist
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
