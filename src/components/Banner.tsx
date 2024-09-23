import { Link } from "react-router-dom";
import banner from "../assets/images/cover.png";
import "../styles/button.css";

const Banner = () => {
  return (
    <div>
      <img
        src={banner}
        style={{
          width: "100%",
          height: "auto",
          boxShadow: "-4px 0 10px rgba(0, 0, 0, 0.5)",
          objectFit: "cover",
        }}
        alt="Banner"
      />
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "24px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <h1
          className="uppercase Oswald font-bold text-6xl mb-0 animated-text2 "
          style={{ animationDelay: "0.2s" }}
        >
          Charging
        </h1>
        <h1
          className="uppercase Oswald font-bold text-6xl mb-0 animated-text2"
          style={{ animationDelay: "0.4s" }}
        >
          Your LIFE
        </h1>
        <h1
          className="uppercase Oswald font-bold text-6xl animated-text2"
          style={{ animationDelay: "0.6s" }}
        >
          THROUGH FITNESS
        </h1>

        <div className="mt-24">
          <h1 className="uppercase Oswald font-bold text-3xl mb-0 animated-text">
            Join our exclusive training{" "}
          </h1>
          <h1 className="uppercase Oswald font-bold text-3xl mb-0 animated-text">
            session just for you
          </h1>
        </div>

        <div>
          <Link to="/shop">
            <button className="secondary-btn mt-28 uppercase"> shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
