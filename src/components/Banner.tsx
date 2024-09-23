import banner from "../assets/images/cover.png";

const Banner = () => {
  return (
    <div>
      <img
        src={banner}
        style={{
          width: "100%",
          height: "auto",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          objectFit: "cover",
        }}
        alt=""
      />
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "24px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <h1 className="uppercase Oswald font-bold text-6xl mb-0">Charging</h1>
        <h1 className="uppercase Oswald font-bold text-6xl mb-0">Your LIFE</h1>
        <h1 className="uppercase Oswald font-bold text-6xl">THROUGH FITNESS</h1>

        <div className="mt-16">
          <h1 className="uppercase Oswald font-bold text-3xl mb-0">
            Join our exclusive training{" "}
          </h1>
          <h1 className="uppercase Oswald font-bold text-3xl mb-0">
            session just for you
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
