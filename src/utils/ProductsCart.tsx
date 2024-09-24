import { IoCart, IoClose } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";

export const RanderRatingStars = (rating) => {
  const totallStars = 5;
  const fullStarts = Math.floor(rating);
  const hasHalfStarts = rating % 1 !== 0;
  const stars = [];
  for (let i = 1; i <= totallStars; i++) {
    if (i <= fullStarts) {
      stars.push(<FaStar key={i} color="#ff8a00"></FaStar>);
    } else if (hasHalfStarts && i === fullStarts + 1) {
      stars.push(
        <FaStarHalfAlt key="half-star" color="#ff8a00"></FaStarHalfAlt>
      );
    } else {
      stars.push(<FaRegStar key={i} color="#ff8a00"></FaRegStar>);
    }
  }
  return stars;
};

const ProductsCart = ({
  id,
  title,
  description,
  images,
  price,
  discount,
  rating,
  featured,
  category,
  color,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const discountPrice = price[0].value - (price[0].value * discount) / 100;

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({ id, title, price: discountPrice, images })
    );
  };

  const handleAddToFavourites = () => {
    dispatch(
      favouriteActions.addToFavourites({
        id,
        title,
        price: discountPrice,
        images,
      })
    );
  };

  return (
    <>
      <div className="product cart">
        <div className="images  h-96">
          {images?.map((cover, index) => (
            <img
              key={index}
              src={cover?.image}
              alt={id}
              className="w-full h-full object-cover"
            />
          ))}
          <div className="flex justify-between w-full p-5 absolute top-0 left-0">
            {discount && <button className="discount-btn">{discount}%</button>}
            {featured && (
              <button className="feature-btn">
                {featured === true && "Featured"}
              </button>
            )}
          </div>
          <div className="opacity-0 hover:opacity-100 transition-all duration-300  flex  items-center gap-2 justify-center absolute bottom-0 left-0 right-0 hover:bottom-2  m-5">
            <button
              onClick={openModal}
              className="quick-view-btn product-btn primary-btn"
            >
              Quick view
            </button>
            <button
              onClick={addToCart}
              className="add-to-cart-btn product-btn primary-btn"
            >
              <IoCart size={23}></IoCart>
            </button>
            <button
              onClick={handleAddToFavourites}
              className="love-btn product-btn primary-btn"
            >
              <IoMdHeart size={23}></IoMdHeart>
            </button>
          </div>
        </div>
        <div className="details flex  items-center flex-col bg-white pb-3 pt-6">
          <NavLink to={`/product-details/${id}`}>
            <span>{title}</span>
          </NavLink>
          <div className="flex items-center gap-2 mt-1 mb-2">
            {RanderRatingStars(rating)}
          </div>
          <div className="flex items-center gap-3">
            {price?.slice(0, 1).map((priceItem, index) => (
              <>
                <p className="line-through" key={index}>
                  ${priceItem.value}
                </p>
                <p className="text-primary-green" key={index}>
                  $
                  {(
                    priceItem.value -
                    (priceItem.value * discount) / 100
                  ).toFixed(2)}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="overlay-bg" onClick={closeModal}>
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content flex justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-1/2 h-[500px] overflow-hidden">
                  {images.slice(0, 1)?.map((cover, index) => (
                    <img
                      key={index}
                      src={cover?.image}
                      alt={id}
                      className="modal-image w-full h-full object-cover"
                    />
                  ))}
                </div>

                <div className="modal-details w-1/2 h-[500px] overflow-y-scroll p-9">
                  <button className="feature-btn bg-indigo-500">
                    SALE {discount}% OFF
                  </button>
                  <h1 className="text-xl mt-2">{title}</h1>
                  <div className="flex items-center gap-1 mt-2">
                    {RanderRatingStars(rating)}
                  </div>
                  {price?.slice(0, 1).map((priceItem, index) => (
                    <div className="flex items-center mt-3 gap-3" key={index}>
                      <p className="line-through ">${priceItem.value}</p>
                      <p className="text-2xl font-semibold  text-primary-green">
                        $
                        {(
                          priceItem.value -
                          (priceItem.value * discount) / 100
                        ).toFixed(2)}
                      </p>
                    </div>
                  ))}
                  <p className="text-sm leading-6 mt-2">{description}</p>
                  <div className="flex items-center mt-3 gap-3">
                    <input
                      type="text"
                      value="1"
                      className="w-12 h-12 text-primary outline-none border-2 border-primary px-4 "
                    />
                    <button className="primary-btn">ADD TO CART</button>
                  </div>

                  <hr className="my-5" />
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <p className="text-xl font-bold">
                        Category :{" "}
                        <span className="font-normal"> Wooden product</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-xl font-bold">
                        Tag : <span className="font-normal"> Wooden</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-xl font-bold">Share :</p>
                      <div className="flex items-center mt-1 gap-3">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                      </div>
                    </div>
                  </div>

                  <button
                    className="close-btn absolute top-0 right-0 w-12 h-12 flex justify-center items-center bg-primary-green text-white"
                    onClick={closeModal}
                  >
                    <IoClose size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductsCart;
