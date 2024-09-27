import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks"; // Adjust the import path as needed
import {
  updateQuantity,
  deleteFromCart,
  clearCart,
} from "../redux/features/cart/cartSlice"; // Adjust the import path as needed
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "sonner";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  description?: string;
  images?: string;
};

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Get products from the cart slice in the Redux store
  const products: CartItem[] = useAppSelector((store) => store.cart.products);
  const [isOpen, setIsOpen] = useState(false);
  console.log(products);

  const toggleSlideOver = () => {
    setIsOpen(!isOpen);
  };

  const handleQuantity = (
    type: "increment" | "decrement",
    _id: string,
    quantity: number
  ) => {
    if (type === "decrement" && quantity === 1) return;
    const payload = { type, _id };
    dispatch(updateQuantity(payload));
  };

  const handleDelete = (_id: string) => {
    // Use a modal or toast for confirmation instead of window.confirm
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        dispatch(deleteFromCart(_id));
      }
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    if (products.length === 0) {
      toast("No products in cart to checkout"); // You can replace this with a toast
      return;
    }
    navigate("/check-out"); // Navigate to checkout page
    setIsOpen(!isOpen);
  };
  const totalPrice = products.reduce(
    (total: number, product: CartItem) =>
      total + product.price * product.stockQuantity,
    0
  );

  return (
    <>
      {/* Button to open the slide-over */}
      <button
        onClick={toggleSlideOver}
        className="py-4 px-1 relative border-2 border-transparent rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
      >
        <ShoppingCartIcon sx={{ fontSize: "30px" }} />
        <span className="absolute inset-0 object-right-top -mr-6">
          <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
            {products.length}
          </div>
        </span>
      </button>
      {/* Slide-over component */}
      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Background backdrop */}
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                {/* Slide-over panel */}
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping Cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            onClick={toggleSlideOver} // Close button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Cart content */}
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products.map((product) => (
                              <li key={product._id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.images} // Replace with product image
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{product.name}</a>
                                      </h3>
                                      <p className="ml-4">
                                        ${product.price.toFixed(2)}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.description}{" "}
                                      {/* Replace with product description */}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty :{product.stockQuantity}
                                    </p>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleQuantity(
                                            "decrement",
                                            product._id,
                                            product.stockQuantity
                                          )
                                        }
                                        className="font-medium text-2xl text-indigo-600 hover:text-indigo-500"
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleQuantity(
                                            "increment",
                                            product._id,
                                            product.stockQuantity
                                          )
                                        }
                                        className="font-medium text-2xl text-indigo-600 hover:text-indigo-500 ml-2"
                                      >
                                        +
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleDelete(product._id)
                                        }
                                        className="font-medium text-red-600 hover:text-red-500 ml-4"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6 flex justify-between">
                        <button
                          onClick={handleCheckout}
                          className="primary-btn"
                        >
                          Checkout
                        </button>
                        <button
                          onClick={handleClearCart}
                          className="primary-btn"
                        >
                          Clear Cart
                        </button>
                      </div>
                      <div className="mt-6 flex  justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            onClick={toggleSlideOver}
                            className="secondary-btn"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
