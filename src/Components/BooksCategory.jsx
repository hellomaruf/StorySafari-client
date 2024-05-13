import novel from "../assets/images/novCate.png";
// import biogra from "../assets/images/Biographies.png";
import comics from "../assets/images/comiCate.png";
import cookbook from "../assets/images/cookCate.png";
import entertainment from "../assets/images/enterCate.png";
import health from "../assets/images/helCate.png";
import history from "../assets/images/hisCate.png";
import travel from "../assets/images/traCate.png";
import bioCate from "../assets/images/bioCate.png";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
// import { Link } from "react-router-dom";

function BooksCategory({ books }) {
  console.log(books);
  return (
    <div>
      <div className="max-w-7xl mx-auto space-y-16 py-10">
        <Slide direction="down">
          <div className="text-center">
            <h2 className="text-4xl font-semibold pb-4">Books Category</h2>
            <p className="max-w-3xl mx-auto">
              Without libraries what have we? We have no past and no future
            </p>
          </div>
        </Slide>
        <div  data-aos="fade-up" className="grid grid-cols-4 items-center justify-center gap-6">
       
            <Link
              to="/category/Novel"
              className="hover:scale-[1.05] transition-all"
            >
              <a href="#" className="group  relative block bg-black">
                <img
                  alt=""
                  src={novel}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Category
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Novel
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        {/* <button className="bg-[#A91D3A] py-2 rounded-xl px-4 ">
                      View All
                    </button> */}
                        Worlds crafted, emotions explored, stories untold emerge
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link
              to="/category/Biographies"
              className="hover:scale-[1.05] transition-all"
            >
              <a href="#" className="group  relative block bg-black">
                <img
                  alt=""
                  src={bioCate}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Category
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Biographic
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        {/* <button className="bg-[#A91D3A] py-2 rounded-xl px-4 ">
                      View All
                    </button> */}
                        Lives unfolded, journeys traced, legacies celebrated.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link
              to="/category/History"
              className="hover:scale-[1.05] transition-all"
            >
              <a href="#" className="group  relative block bg-black">
                <img
                  alt=""
                  src={history}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Category
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    History
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        {/* <button className="bg-[#A91D3A] py-2 rounded-xl px-4 ">
                      View All
                    </button> */}
                        Echoes of the past shape our present world
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link
              to="/category/Travel"
              className="hover:scale-[1.05] transition-all"
            >
              <a href="#" className="group  relative block bg-black">
                <img
                  alt=""
                  src={travel}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Category
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Travel
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        {/* <button className="bg-[#A91D3A] py-2 rounded-xl px-4 ">
                      View All
                    </button> */}
                        Adventure calls, new horizons await, memories abound
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link
              to="/category/Cookbooks"
              className="hover:scale-[1.05] transition-all"
            >
              <a href="#" className="group  relative block bg-black">
                <img
                  alt=""
                  src={cookbook}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Category
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Cookbooks
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Recipes whispered, flavors mingled.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link
              to="/category/Comics"
              className="hover:scale-[1.05] transition-all"
            >
              <a href="#" className="group  relative block bg-black">
                <img
                  alt=""
                  src={comics}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Category
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Comics
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Words dance, colors sing, heroes rise, adventures
                        unfold.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link
              to="/category/Entertainment"
              className="hover:scale-[1.05] transition-all"
            >
              <a href="#" className="group  relative block bg-black">
                <img
                  alt=""
                  src={entertainment}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Category
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Entertainment
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Laughter echoes, drama unfolds, spectacles mesmerize,
                        joy shared
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <Link
              to="/category/Health"
              className="hover:scale-[1.05] transition-all "
            >
              <a href="#" className="group  relative block bg-black">
                <img
                  alt=""
                  src={health}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Category
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Health
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Vitality nurtured, wellness pursued, bodies and minds
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
         
        </div>
      </div>
    </div>
  );
}

export default BooksCategory;
