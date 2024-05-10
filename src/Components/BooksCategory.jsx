import novel from "../assets/images/novel.png";
import biogra from "../assets/images/Biographies.png";
import comics from "../assets/images/Comics.png";
import cookbook from "../assets/images/Cookbooks.png";
import entertainment from "../assets/images/Entertainment.png";
import health from "../assets/images/Health.png";
import history from "../assets/images/History.png";
import travel from "../assets/images/Travel.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function BooksCategory({ books }) {
  console.log(books);
  return (
    <div>
      <div className="max-w-5xl mx-auto space-y-16 py-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold pb-4">Books Category</h2>
          <p className="max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ut beatae est maxime repellat quam soluta atque architecto. Nobis,
            nostrum.
          </p>
        </div>
        <div className="grid grid-cols-4 items-center justify-center gap-6">
          <Link
            to="/category/Novel"
            className="hover:scale-[1.05] transition-all"
          >
            <img className="" src={novel} alt="" />
          </Link>
          <Link
            to="/category/Biographies"
            className="hover:scale-[1.05] transition-all"
          >
            <img className="" src={biogra} alt="" />
          </Link>
          <Link
            to="/category/History"
            className="hover:scale-[1.05] transition-all"
          >
            <img className="" src={history} alt="" />
          </Link>
          <Link
            to="/category/Travel"
            className="hover:scale-[1.05] transition-all"
          >
            <img className="" src={travel} alt="" />
          </Link>
          <Link
            to="/category/Cookbooks"
            className="hover:scale-[1.05] transition-all"
          >
            <img className="" src={cookbook} alt="" />
          </Link>
          <Link
            to="/category/Comics"
            className="hover:scale-[1.05] transition-all"
          >
            <img className="" src={comics} alt="" />
          </Link>
          <Link
            to="/category/Entertainment"
            className="hover:scale-[1.05] transition-all"
          >
            <img className="" src={entertainment} alt="" />
          </Link>
          <Link
            to="/category/Health"
            className="hover:scale-[1.05] transition-all "
          >
            <img className="" src={health} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BooksCategory;
