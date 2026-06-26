import Hero from "../components/home/Hero";
import BrandStory from "../components/home/BrandStory";
import CategorySplit from "../components/home/CategorySplit";

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
