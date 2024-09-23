import React from "react";
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
  const carouselRef = React.useRef<CarouselRef>(null); // Correct ref type

  const next = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Access next method
    }
  };

  const prev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(); // Access prev method
    }
  };

  return (
    <div className="mx-auto max-w-6xl my-20 relative">
      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        dots={false}
        slidesToShow={3} // Adjust number of visible cards
        slidesToScroll={1}
        infinite={false} // Disable infinite scrolling
      >
        {categories.map((category, index) => (
          <div key={index} className="flex justify-center">
            <Card
              hoverable
              style={{ width: 340, height: 300, overflow: "hidden" }}
            >
              <img
                alt={category.title}
                src={category.image}
                className="zoom-image"
                style={{ width: "100%", height: "230px", display: "block" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "40px", // Space reserved for title
                  textAlign: "center",
                }}
              >
                <Meta title={category.title} />
              </div>
            </Card>
          </div>
        ))}
      </Carousel>

      {/* Left Arrow Button */}
      <LeftOutlined
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: "-40px",
          fontSize: "24px",
          cursor: "pointer",
        }}
      />

      {/* Right Arrow Button */}
      <RightOutlined
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: "-40px",
          fontSize: "24px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Categories;
