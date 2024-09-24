import { useEffect, useState } from "react";
import "../../styles/hrtag.css";
import ProductsCart from "../../utils/ProductsCart";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image:
      "https://i.ibb.co.com/TRwD8FP/gym-with-weight-bar-that-says-arc-fix-it-886336-784.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    image:
      "https://i.ibb.co.com/TRwD8FP/gym-with-weight-bar-that-says-arc-fix-it-886336-784.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    image: "https://i.ibb.co.com/r5688R2/equipment-6-removebg-preview.png",
  },
];

const FeaturedProducts = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="mx-auto max-w-6xl my-20  relative">
      <h1 className="text-center font-oswald text-xl font-semibold tracking-widest">
        EXCLUSIVE OUTLET DEALS
      </h1>
      <hr className={`mx-auto hr-animation ${visible ? "visible" : ""}`} />

      <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductsCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
