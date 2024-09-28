import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../redux/api/productApi";

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
    quantity: "",
    image: "",
  });

  // State to manage multiple images
  const [images, setImages] = useState<string[]>([""]);

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleAddImage = () => {
    setImages([...images, ""]); // Add a new empty string for a new image input
  };

  console.log(error);
  const handleAddProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    // const name = form.name.value;
    // const price = form.price.value;
    // const category = form.category.value;
    // const description = form.description.value;
    // const quantity = Number(form.quantity.value);
    // const image = form.image.value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const price = (form.elements.namedItem("price") as HTMLInputElement).value;
    const category = (form.elements.namedItem("category") as HTMLSelectElement)
      .value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;
    const stockQuantity = Number(
      (form.elements.namedItem("stockQuantity") as HTMLInputElement).value
    );

    const productData = {
      name,
      price: parseFloat(price),
      category,
      description,
      stockQuantity,
      images, // Use the images state here
    };

    console.log(productData);

    try {
      const result = await addProduct(productData).unwrap();
      console.log(result);
      form.reset();
      setImages([""]); // Reset images to empty state
      toast.success("Product added successfully");
    } catch (error) {
      console.error("Failed to add product:", error);
      if ((error as any).data) {
        console.error("Error data:", (error as any).data);
      }
    }
  };

  return (
    <div className="bg-gray-400">
      <h1 className="text-5xl font-bold text-center py-7">Add Product</h1>
      <div>
        <div className="  lg:w-3/5 pb-8 mx-auto">
          <form onSubmit={handleAddProduct}>
            <div className=" mb-6 ">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Name...."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Price
                </label>
                <input
                  type="number"
                  name="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="price"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Category
                </label>

                <select
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
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
              <div>
                <label
                  htmlFor="visitors"
                  className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Description
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description...."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Quantity
              </label>
              <input
                type="number"
                name="stockQuantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Quantity"
                required
              />
            </div>
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
              <Button type="primary" onClick={handleAddImage} className=" mt-2">
                Add Another Image
              </Button>
            </div>

            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </form>

          {/* Show loading, success, or error messages */}
          {isLoading && <p>Loading...</p>}

          {isError && <p>Error product not add successfull </p>}
        </div>
      </div>
    </div>
  );
};

export default UpdateProductAdmin;
