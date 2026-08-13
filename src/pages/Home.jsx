import Hero from "../components/home/Hero";
import BrandStory from "../components/home/BrandStory";
import CategorySplit from "../components/home/CategorySplit";
import FeatureRoutine from "../components/home/FeatureRoutine";
import FinalCta from "../components/home/FinalCta";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BrandStory />
      <CategorySplit />
      <FeatureRoutine />
      <FinalCta />
    </div>
  );
};

export default Home;
