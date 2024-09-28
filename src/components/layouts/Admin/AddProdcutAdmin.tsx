/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddProductMutation } from "../../../redux/api/productApi";

const AddProdcutAdmin = () => {
  const [addProduct, { isLoading, isError, isSuccess, error }] =
    useAddProductMutation();

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
    const quantity = Number(
      (form.elements.namedItem("quantity") as HTMLInputElement).value
    );
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;

    const productData = {
      name,
      price: parseFloat(price),
      category: [category],
      description,
      quantity,
      image,
    };

    console.log(productData);

    try {
      const result = await addProduct(productData).unwrap();
      console.log(result);
      form.reset();
      console.log("Product added successfully");
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
        <div className="  lg:w-3/5 mx-auto">
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
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Flowbite"
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
                <input
                  type="url"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="visitors"
                  className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Description
                </label>
                <input
                  type="number"
                  id="visitors"
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
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Images
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="•••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </form>

          {/* Show loading, success, or error messages */}
          {isLoading && <p>Loading...</p>}
          {isSuccess && (
            <p className="text-center text-4xl font-bold mx-auto text-green-600">
              Product added successfully!
            </p>
          )}
          {isError && <p>Error product not add successfull </p>}
        </div>
      </div>
    </div>
  );
};

export default AddProdcutAdmin;
