/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { useCreateOrderMutation } from "../../redux/api/checkoutApi";
import { toast } from "sonner";
import { clearCart } from "../../redux/features/cart/cartSlice";

const CheckOut = () => {
  const { refetch: refetchProducts } = useGetProductsQuery({});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const products = useAppSelector((state) => state.cart.products);
  console.log(products);
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [paymentMethod] = useState<"COD">("COD"); // Fixed to 'Cash on Delivery'

  const totalAmount = products.reduce(
    (acc: number, product: any) => acc + product.price * product.stockQuantity,
    0
  );
  console.log(totalAmount);
  // RTK Query mutation hook
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!user.name || !user.address || !user.phone) {
      toast.error("Please fill in all the fields.");
      return;
    }

    const orderData = {
      cartItems: products.map((product) => ({
        productId: product._id,
        quantity: product.stockQuantity, // Ensure correct field for quantity
      })),
      user: {
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
      },
      paymentMethod, // Always 'Cash on Delivery'
    };
    console.log(orderData);
    try {
      await createOrder(orderData).unwrap();
      toast.success("Order created successfully!");
      setTimeout(() => {
        dispatch(clearCart());
        refetchProducts();
        navigate("/checkout-success");
      }, 2000);
    } catch (error) {
      toast.error("Failed to place the order. Please try again.");
    }
  };

  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Checkout</h1>
      <div className="gap-8 mt-16">
        <div className="bg-gray-100 rounded-md p-4 h-max">
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="lg:w-[50%] mx-auto">
              <h3 className="text-base text-center text-gray-800 font-semibold mb-4">
                Enter Details
              </h3>
              <div className="space-y-3">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    placeholder="Phone No."
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>

                <hr className="border-gray-300 border-2 mb-4" />
                <div>
                  <p className="flex flex-wrap  text-lg font-bold">
                    Total{" "}
                    <span className="ml-auto">${totalAmount.toFixed(2)}</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full lg:w-[50%] mt-4 py-2.5 px-4 text-base font-semibold rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                {isLoading ? "Processing..." : "Checkout"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
