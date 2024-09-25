import whyShooseUsPic1 from "../../assets/icons/why_choose_us/quality1.png";
import whyShooseUsPic2 from "../../assets/icons/why_choose_us/quality2.png";
import whyShooseUsPic3 from "../../assets/icons/why_choose_us/quality3.png";
import whyShooseUsPic4 from "../../assets/icons/why_choose_us/quality4.png";
import whyShooseUsPic5 from "../../assets/icons/why_choose_us/quality5.png";
import whyShooseUsPic6 from "../../assets/icons/why_choose_us/quality6.png";

import { useEffect } from "react";

const BenefitsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInScale");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".benefit-card")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: "High Quality",
      text: "Our products are made from the finest materials ensuring durability and performance.",
      image: whyShooseUsPic1,
    },
    {
      title: "Affordable Prices",
      text: "We offer competitive pricing without compromising on quality.",
      image: whyShooseUsPic2,
    },
    {
      title: "Eco-Friendly",
      text: "Our products are sustainably sourced, ensuring a positive impact on the environment.",
      image: whyShooseUsPic3,
    },
    {
      title: "Fast Delivery",
      text: "We ensure that your orders are delivered quickly and efficiently.",
      image: whyShooseUsPic4,
    },
    {
      title: "24/7 Support",
      text: "Our dedicated support team is available around the clock to assist you.",
      image: whyShooseUsPic5,
    },
    {
      title: "Customizable Options",
      text: "We offer various customization options to suit your specific needs.",
      image: whyShooseUsPic6,
    },
  ];
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-center pb-16 font-oswald text-sm md:text-base lg:text-2xl font-bold tracking-widest">
          Why Choose Our Product?
          <hr className="w-[40%] h-[2px] bg-black opacity-1 mt-3 transition-opacity duration-500 ease-in hr-visible mx-auto" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-card flex flex-col items-center bg-white shadow-lg p-6 rounded-lg opacity-0 transform scale-95 transition-all delay-${
                index * 200
              }ms`}
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="h-20 w-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
