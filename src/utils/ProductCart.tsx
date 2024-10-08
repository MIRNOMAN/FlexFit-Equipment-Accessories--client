import { IoCart } from "react-icons/io5";
import "../styles/productCart.css";
import { ProductCartProps } from "../types/productcartType";
import { Link } from "react-router-dom";

const ProductCart: React.FC<ProductCartProps> = ({
  _id,
  name,
  price,
  images,
}) => {
  const addToCart = () => {
    console.log("Add to cart");
  };

  return (
    <>
      <div className="relative  w-full max-w-sm overflow-hidden rounded-lg border">
        {/* Display the first image or a fallback if the image array is empty */}
        <img
          className="h-60 w-full max-h-60 rounded-t-lg object-cover"
          src={
            images && images.length > 0
              ? images[0]
              : "https://i.ibb.co.com/pxXKJ8H/Yoga-Mats.jpg"
          }
          alt={`${name} image`}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://i.ibb.co.com/pxXKJ8H/Yoga-Mats.jpg";
          }}
        />

        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
          Sale
        </span>
        <div className="mt-2 px-5">
          <h5 className="text-base font-semibold  text-slate-900">{name}</h5>

          <div className="opacity-0 hover:opacity-100 transition-all duration-300 flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 hover:bottom-2 m-5">
            <Link to={`/productdetails/${_id}`}>
              <button className="quick-view-btn product-btn primary-btn h-10 w-32">
                Quick view
              </button>
            </Link>
            <button
              className="add-to-cart-btn product-btn primary-btn h-10 w-32"
              onClick={addToCart}
            >
              <IoCart size={23} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p>
              <span className="text-lg font-bold text-slate-900">
                ${price?.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
