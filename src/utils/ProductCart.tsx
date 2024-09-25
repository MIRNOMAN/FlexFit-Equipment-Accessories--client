import { IoCart } from "react-icons/io5";
import "../styles/productCart.css";

const ProductCart = () => {
  //   const addToCart = () => {
  //     console.log("Add to cart");
  //     dispatch(
  //       cartActions.addToCart({id, title, price: discountPrice, images})
  //     )
  //   };

  //   const handleAddToFavourites = () => {
  //     console.log("Add to favorites");
  //     dispatch(
  //       favouriteActions.addToFavourites({id, title, price: discountPrice, images})
  //     )
  //   };
  return (
    <>
      <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg border">
        <a href="#">
          <img
            className="h-60 rounded-t-lg object-cover"
            src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="product image"
          />
        </a>
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
          Sale
        </span>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-slate-900">
              Nike Air MX Super 5000
            </h5>
          </a>
          <div className="opacity-0 hover:opacity-100 transition-all duration-300  flex  items-center gap-2 justify-center absolute bottom-0 left-0 right-0 hover:bottom-2  m-5">
            <button className="quick-view-btn product-btn primary-btn">
              Quick view
            </button>
            <button className="add-to-cart-btn product-btn primary-btn">
              <IoCart size={23}></IoCart>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">$249</span>
              <span className="text-sm text-slate-900 line-through">$299</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
