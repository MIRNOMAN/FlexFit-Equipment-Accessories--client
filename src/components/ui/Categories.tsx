import React, { useEffect, useState } from "react";
import { Card, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import category1 from "../../assets/images/categories/Treadmills.jpg";
import category2 from "../../assets/images/categories/Barbells.jpg";
import category3 from "../../assets/images/categories/Dumbbells.jpg";
import category4 from "../../assets/images/categories/Ellipticals.jpg";
import category5 from "../../assets/images/categories/Foam Rollers.jpg";
import category6 from "../../assets/images/categories/Kettlebells.jpg";
import category7 from "../../assets/images/categories/Yoga_Mats.jpg";
import type { CarouselRef } from "antd/es/carousel";

const { Meta } = Card;

const categories = [
  { title: "Treadmills", image: category1 },
  { title: "Barbells", image: category2 },
  { title: "Dumbbells", image: category3 },
  { title: "Ellipticals", image: category4 },
  { title: "Foam Rollers", image: category5 },
  { title: "Kettlebells", image: category6 },
  { title: "Yoga Mats", image: category7 },
];

const Categories = () => {
  const carouselRef = React.useRef<CarouselRef>(null);
  const [slidesToShow, setSlidesToShow] = useState(1); // Default to 1 slide

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSlidesToShow(4); // Large devices
    } else if (width >= 768) {
      setSlidesToShow(3); // Medium devices
    } else if (width >= 640) {
      setSlidesToShow(2); // Small devices
    } else {
      setSlidesToShow(1); // Extra small devices
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className="mx-auto max-w-6xl my-20  relative">
      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        dots={false}
        slidesToShow={slidesToShow} // Use dynamic slidesToShow
        slidesToScroll={1}
        infinite={false}
      >
        {categories.map((category, index) => (
          <div key={index} className="flex space-x-10 justify-center ">
            <Card
              hoverable
              className="w-60 h-60 md:w-80 lg:w-full  " // Responsive card sizes
            >
              <img
                alt={category.title}
                src={category.image}
                className="zoom-image w-full h-40 object-cover" // Adjust image size and maintain aspect ratio
              />
              <div className="flex justify-center items-center h-10 text-center">
                <Meta title={category.title} />
              </div>
            </Card>
          </div>
        ))}
      </Carousel>

      {/* Left Arrow Button */}
      <LeftOutlined
        onClick={prev}
        className="absolute top-1/2 left-[-40px] text-xl cursor-pointer"
      />

      {/* Right Arrow Button */}
      <RightOutlined
        onClick={next}
        className="absolute top-1/2 right-[-40px] text-xl cursor-pointer"
      />
    </div>
  );
};

export default Categories;
