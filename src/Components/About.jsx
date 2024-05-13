import { Slide } from "react-awesome-reveal";
import img from "../assets/images/about.png";
function About() {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-2 gap-2 items-center ">
        <Slide direction="left">
          <div className="col-span-1">
            <img src={img} alt="" />
          </div>
        </Slide>
          <Slide direction="right" >
        <div className="col-span-1 pl-10 space-y-5">
            <h1 className="text-4xl font-semibold">About Our Library</h1>
            <p>
              The library is a place of exploration, where one can lose
              themselves in the vast expanse of human thought and imagination.
              From classic literature to contemporary fiction, from scholarly
              tomes to popular bestsellers, the collection is a testament to the
              diversity of human expression. Yet, a library is more than just a
              repository of books. <br /> <br />
              Its a communal space where individuals from all walks of life come
              together in pursuit of knowledge and enlightenment. Here,
              conversations spark, ideas flourish, and friendships blossom
              amidst the hallowed stacks.
            </p>
            <button className="bg-[#A91D3A] hover:bg-[#cf3a58] btn text-white ">
              Read More
            </button>
        </div>
          </Slide>
      </div>
    </div>
  );
}

export default About;
