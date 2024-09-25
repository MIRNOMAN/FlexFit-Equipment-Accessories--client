import Banner from "../components/Banner";
import BenefitsSection from "../components/ui/BenefitsSection";
import Categories from "../components/ui/Categories";
import FeaturedProducts from "../components/ui/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedProducts />
      <BenefitsSection />
    </div>
  );
};

export default Home;
