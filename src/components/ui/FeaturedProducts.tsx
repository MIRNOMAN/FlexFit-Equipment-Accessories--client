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
    <div className="mx-auto max-w-6xl my-20 relative px-4">
      <h1 className="text-center font-oswald text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest">
        EXCLUSIVE FEATURES
      </h1>
      <hr className={`mx-auto hr-animation ${visible ? "visible" : ""}`} />

      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] group">
            <img
              src={fitnessFeture1}
              alt="Fitness Feature"
              className="w-full h-full object-cover"
            />
            <p className="lg:text-2xl text-base md:text-xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              Cast Iron & Bumper Plates
            </p>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="mt-4 px-4 py-2 bg-blue-600 bg-opacity-50 text-white rounded hover:bg-opacity-100 hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
                Explore More
              </button>
            </div>
          </div>

          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] group">
            <img
              src={fitnessFeture2}
              alt="Fitness Feature"
              className="w-full h-full object-cover"
            />
            <p className="lg:text-2xl text-base md:text-xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              Hex Dumbbells
            </p>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="mt-4 px-4 py-2 bg-blue-600 bg-opacity-50 text-white rounded hover:bg-opacity-100 hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] my-5 group">
          <img
            src={fitnessFeture6}
            alt="Fitness Feature"
            className="w-full h-full bg-cover object-cover"
          />
          <p className="lg:text-2xl text-base md:text-xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            Olympic Barbells
          </p>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button className="mt-4 px-4 py-2 bg-blue-600 bg-opacity-50 text-white rounded hover:bg-opacity-100 hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
              Explore More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] group">
            <img
              src={fitnessFeture4}
              alt="Fitness Feature"
              className="w-full h-full bg-cover object-cover"
            />
            <p className="lg:text-2xl text-base md:text-xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              Rigs & Racks
            </p>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="mt-4 px-4 py-2 bg-blue-600 bg-opacity-50 text-white rounded hover:bg-opacity-100 hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
                Explore More
              </button>
            </div>
          </div>

          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] group">
            <img
              src={fitnessFeture5}
              alt="Fitness Feature"
              className="w-full h-full bg-cover object-cover"
            />
            <p className="lg:text-2xl text-base md:text-xl uppercase Oswald font-bold absolute inset-0 flex justify-center items-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              Benches
            </p>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="mt-4 px-4 py-2 bg-blue-600 bg-opacity-50 text-white rounded hover:bg-opacity-100 hover:bg-blue-700 transform transition-transform duration-300 group-hover:scale-105">
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
