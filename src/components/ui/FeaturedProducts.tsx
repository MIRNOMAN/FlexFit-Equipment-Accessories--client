import { useEffect, useState } from "react";
import "../../styles/hrtag.css";

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
    </div>
  );
};

export default FeaturedProducts;
