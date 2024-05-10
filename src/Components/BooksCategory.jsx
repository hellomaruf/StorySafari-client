import novel from "../assets/images/novel.png";
import biogra from "../assets/images/Biographies.png";
import comics from "../assets/images/Comics.png";
import cookbook from "../assets/images/Cookbooks.png";
import entertainment from "../assets/images/Entertainment.png";
import health from "../assets/images/Health.png";
import history from "../assets/images/History.png";
import travel from "../assets/images/Travel.png";

function BooksCategory() {
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
          <div className="hover:scale-[1.05] transition-all">
            <img className="" src={novel} alt="" />
          </div>
          <div className="hover:scale-[1.05] transition-all">
            <img className="" src={biogra} alt="" />
          </div>
          <div className="hover:scale-[1.05] transition-all">
            <img className="" src={history} alt="" />
          </div>
          <div className="hover:scale-[1.05] transition-all">
            <img className="" src={travel} alt="" />
          </div>
          <div className="hover:scale-[1.05] transition-all">
            <img className="" src={cookbook} alt="" />
          </div>
          <div className="hover:scale-[1.05] transition-all">
            <img className="" src={comics} alt="" />
          </div>
          <div className="hover:scale-[1.05] transition-all">
            <img className="" src={entertainment} alt="" />
          </div>
          <div className="hover:scale-[1.05] transition-all ">
            <img className="" src={health} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksCategory;
