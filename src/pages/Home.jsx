import Hero from "../components/Hero";
import BrandStory from "../components/BrandStory";
import CategorySplit from "../components/CategorySplit";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BrandStory />
      <CategorySplit />
    </div>
  );
};

export default Home;
