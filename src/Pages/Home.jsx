import About from "../Components/About";
import BooksCategory from "../Components/BooksCategory";
import Hero from "../Components/Hero";
import Recomended from "../Components/Recomended";

function Home() {
  return (
    <div>
      <Hero />
      <BooksCategory />
      <Recomended />
      <About />
    </div>
  );
}

export default Home;
