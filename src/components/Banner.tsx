import { Link } from "react-router-dom";
import banner from "../assets/images/cover.png";
import "../styles/button.css";

const Banner = () => {
  return (
    <div>
      <img
        src={banner}
        className="w-full h-auto shadow-lg md:shadow-xl object-cover"
        alt="Banner"
      />
      <div
        className="absolute top-[50%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl shadow-md 
            md:top-[80%] md:left-[30%] lg:top-[80%] lg:left-[25%]"
      >
        <h1
          className="uppercase Oswald font-normal lg:font-bold md:font-bold text-sm md:text-4xl lg:text-6xl mb-0 animated-text2 "
          style={{ animationDelay: "0.2s" }}
        >
          Charging
        </h1>
        <h1
          className="uppercase Oswald font-normal lg:font-bold md:font-bold text-sm md:text-4xl lg:text-6xl mb-0 animated-text2"
          style={{ animationDelay: "0.4s" }}
        >
          Your LIFE
        </h1>
        <h1
          className="uppercase Oswald sm:font-normal lg:font-bold md:font-bold text-sm md:text-4xl lg:text-6xl animated-text2"
          style={{ animationDelay: "0.6s" }}
        >
          THROUGH FITNESS
        </h1>

        <div className="lg:mt-24 md:mt-14 mt-4">
          <h1 className="uppercase font-oswald font-normal md:font-bold lg:font-bold text-xs mb-0 animate-pulse md:text-2xl lg:text-3xl">
            Join our exclusive training{" "}
          </h1>
          <h1 className="uppercase font-oswald font-normal md:font-bold lg:font-bold text-xs mb-0 animate-pulse md:text-2xl lg:text-3xl">
            session just for you
          </h1>
        </div>

        <div>
          <Link to="/shop">
            <button className=" mt-4 secondary-btn md:mt-28 lg:mt-28 uppercase">
              {" "}
              shop now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
