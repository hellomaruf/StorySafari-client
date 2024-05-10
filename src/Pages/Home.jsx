import { useLoaderData } from "react-router-dom";
import About from "../Components/About";
import BooksCategory from "../Components/BooksCategory";
import Hero from "../Components/Hero";
import Recomended from "../Components/Recomended";

function Home() {
  const books = useLoaderData()
  console.log(books);
  return (
    <div>
      <Hero />
      <BooksCategory books={books} />
      <Recomended />
      <About />
    </div>
  );
}

export default Home;
