/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../redux/api/productApi";
import { useEffect, useState } from "react";
import { Button } from "antd";

const UpdateProductAdmin = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading: isFetchingProduct,
    error: fetchError,
  } = useGetProductByIdQuery(id); // Fetch product by ID

  const [updateProduct, { isLoading: isUpdating, isSuccess, isError }] =
    useUpdateProductMutation();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stockQuantity: "",
    images: "", // Keep the images field here as part of formData
  });

  // State to manage multiple images, initialize as string array
  const [images, setImages] = useState<string[]>([""]);

  // Only update formData if product is available
  useEffect(() => {
    console.log(product);
    if (product) {
      setFormData({
        name: product.data.name || "",
        price: product.data.price || "",
        category: product.data.category,
        description: product.data.description || "",
        stockQuantity: product.data.stockQuantity || "",
        images: product.data.images || "",
      });

      // Set images state if product images are available
      setImages(product.data.images || [""]);
    }
  }, [product]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleAddImage = () => {
    setImages([...images, ""]); // Add a new empty string for a new image input
  };

  const handleUpdateProduct = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    try {
      const updatedProduct = {
        ...formData,
        price: parseFloat(formData.price),
        quantity: Number(formData.stockQuantity),
        images, // Include the images array here
      };

      const result = await updateProduct({
        _id: id,
        data: updatedProduct,
      }).unwrap();
      console.log(result);
      console.log("Product updated successfully");
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };

  if (isFetchingProduct) return <div>Loading product...</div>;
  if (fetchError) return <div>Error fetching product data</div>;

  // Check if the product is available before rendering the form
  if (!product) return <div>No product data available</div>;

  return (
    <div className="bg-gray-400">
      <h1 className="text-5xl font-bold text-center py-7">Update Product</h1>
      <div>
        <div className="lg:w-3/5 pb-8 mx-auto">
          <form onSubmit={handleUpdateProduct}>
            <div className="mb-6">
              {/* Product Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Name"
                  required
                />
              </div>

              {/* Product Price */}
              <div>
                <label
                  htmlFor="price"
                  className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Price"
                  required
                />
              </div>

              {/* Product Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Treadmills">Treadmills</option>
                  <option value="Barbells">Barbells</option>
                  <option value="Dumbbells">Dumbbells</option>
                  <option value="Ellipticals">Ellipticals</option>
                  <option value="Foam Rollers">Foam Rollers</option>
                  <option value="Kettlebells">Kettlebells</option>
                  <option value="Yoga Mats">Yoga Mats</option>
                </select>
              </div>

              {/* Product Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>

              {/* Product Quantity */}
              <div>
                <label
                  htmlFor="stockQuantity"
                  className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Quantity
                </label>
                <input
                  type="number"
                  name="stockQuantity"
                  value={formData.stockQuantity}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Quantity"
                  required
                />
              </div>

              {/* Product Images */}
              <div className="mb-6">
                <label className="block my-2 text-sm font-medium text-gray-900 dark:text-white">
                  Product Images
                </label>
                {images.map((image, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="url"
                      name={`image${index}`}
                      value={image}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Image URL"
                      required
                    />
                  </div>
                ))}
                <Button
                  type="primary"
                  onClick={handleAddImage}
                  className="mt-2"
                >
                  Add Another Image
                </Button>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Show loading, success, or error messages */}
          {isUpdating && <p>Updating product...</p>}
          {isError && <p>Failed to update product</p>}
          {isSuccess && <p>Product updated successfully</p>}
        </div>
      </div>
    </div>
  );
};

export default UpdateProductAdmin;
