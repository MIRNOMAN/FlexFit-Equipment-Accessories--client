import { useEffect, useState } from "react";
import fitnessFeture1 from "../../assets/images/feature/feature1.jpg";
import fitnessFeture2 from "../../assets/images/feature/feature2.jpg";
import fitnessFeture6 from "../../assets/images/feature/feature6.jpg";
import fitnessFeture4 from "../../assets/images/feature/feature4.jpg";
import fitnessFeture5 from "../../assets/images/feature/feature5.jpg";
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
        EXCLUSIVE FEATURES
      </h1>
      <hr className={`mx-auto hr-animation ${visible ? "visible" : ""}`} />

      <div className="mt-20">
        <div className="flex gap-6 ">
          <div className="relative w-full h-[350px] group">
            {/* Add group for hover effects */}
            <img
              src={fitnessFeture1}
              alt="Fitness Feature"
              className="w-full h-full object-cover"
            />
            <p className="text-4xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              Cast Iron & Bumper Plates
            </p>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
                {/* Button animation */}
                Explore More
              </button>
            </div>
          </div>
          <div className="relative w-full h-[350px] group">
            {/* Add group for hover effects */}
            <img
              src={fitnessFeture2}
              alt="Fitness Feature"
              className="w-full h-full object-cover"
            />
            <p className="text-4xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              Hex Dumbbells
            </p>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
                {/* Button animation */}
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full my-5 h-[350px] group">
          {/* Add group for hover effects */}
          <img
            src={fitnessFeture6}
            alt="Fitness Feature"
            className="w-full h-full bg-cover object-cover"
          />
          <p className="text-4xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            olympic barbells
          </p>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
              {/* Button animation */}
              Explore More
            </button>
          </div>
        </div>
        <div className="flex gap-6 ">
          <div className="relative w-full h-[350px] group">
            {/* Add group for hover effects */}
            <img
              src={fitnessFeture4}
              alt="Fitness Feature"
              className="w-full h-full bg-cover object-cover"
            />
            <p className="text-4xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              rigs & ricks
            </p>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
                {/* Button animation */}
                Explore More
              </button>
            </div>
          </div>
          <div className="relative w-full h-[350px] group">
            {/* Add group for hover effects */}
            <img
              src={fitnessFeture5}
              alt="Fitness Feature"
              className="w-full h-full bg-cover object-cover"
            />
            <p className="text-4xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              benches
            </p>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
                {/* Button animation */}
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
