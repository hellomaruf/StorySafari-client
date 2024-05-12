import { Rate } from "antd";
import { Link, useLoaderData } from "react-router-dom";

function AllBooksCard() {
  const books = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="flex mb-12 ">
        <div className="dropdown dropdown-right dropdown-hover">
          <div tabIndex={0} role="button" className="mr-3">
            <a
              className="group relative inline-flex items-center overflow-hidden  bg-[#A91D3A] rounded-xl px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              href="#"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                {" "}
                View{" "}
              </span>
            </a>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                to="/allBooksTable"
                className="flex items-center justify-center"
              >
                <i className="ri-archive-drawer-line"></i>
                <a>Table View</a>
              </Link>
            </li>
            <li>
              <Link
                to="/allBooksCard"
                className="flex items-center justify-center"
              >
                <i className="ri-archive-drawer-line"></i>
                <a>Card View</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5  my-12">
        {books.map((book, index) => (
          <div key={index}>
            <a href="#" className="group relative block overflow-hidden">
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src={book?.photo}
                alt=""
                className="h-64 rounded-xl w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative  bg-white py-5">
                <div className="flex justify-between">
                  <h3 className="bg-orange-100 py-1 px-3 rounded-full font-medium">
                    {book?.category_name}
                  </h3>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {book?.book_name}
                </h3>

                <p className="mt-1.5 text-sm text-gray-700">
                  Author : {book?.author_Name}
                </p>

                <div className="pt-3">
                  <Rate defaultValue={book?.rating} />
                </div>
                <form className="mt-4">
                  <button className="btn w-full rounded bg-[#A91D3A] hover:bg-[#c04a62] text-white  ">
                    Update
                  </button>
                </form>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBooksCard;
