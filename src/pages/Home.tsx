import Banner from "../components/Banner";
import BenefitsSection from "../components/ui/BenefitsSection";
import Categories from "../components/ui/Categories";
import FeaturedProducts from "../components/ui/FeaturedProducts";
import ImageGallery from "../components/ui/ImageGallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedProducts />
      <BenefitsSection />
      <ImageGallery />
    </div>
  );
};

export default Home;
