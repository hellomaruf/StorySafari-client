import { Rate } from "antd";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function AllBooksTable() {
  const books = useLoaderData();
  const [filteredBooks, setFilteredBooks] = useState(books);
  console.log(books);
  const handleAvailable = () => {
    const available = filteredBooks.filter((book) => book.quantity > 0);
    setFilteredBooks(available);
  };
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between mb-12 mx-6 lg:mx-0">
          <div className="dropdown dropdown-bottom md:dropdown-right dropdown-hover">
            <div tabIndex={0} role="button" className="mr-3 z-40">
              <a
                className="group relative inline-flex items-center overflow-hidden  bg-[#A91D3A] rounded-xl px-8 py-3 text-white "
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
                  <i className="ri-grid-fill"></i>
                  <a>Card View</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button
              onClick={handleAvailable}
              className="btn border-2 bg-transparent border-[#A91D3A] text-[#A91D3A] hover:border-[#A91D3A]"
            >
              <i className="ri-filter-line"></i>Available Books
            </button>
          </div>
        </div>


        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead className="">
              <tr>
                <th className="text-base text-[#A91D3A]"></th>
                <th className="text-base text-[#A91D3A]">Book Name</th>
                <th className="hidden lg:block text-base text-[#A91D3A]">Author Name</th>
                <th className="text-base text-[#A91D3A]">Category</th>
                <th className="hidden lg:block text-base text-[#A91D3A]">Rating</th>
             
              </tr>
            </thead>
            {filteredBooks.map((book, index) => (
              <tbody key={index}>
                <tr>
                  <th>
                    {" "}
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-lg w-12 lg:w-16 h-16 lg:h-20">
                          <img
                            src={book?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>{book?.book_name}</td>
                  <td className="hidden lg:block">{book?.author_Name}</td>
                  <td>{book?.category_name}</td>
                  <td className="hidden lg:block">
                    <Rate defaultValue={book?.rating} />
                  </td>
                  <td>
                    <button>
                      {" "}
                      <Link
                        to={`/updateBooks/${book?._id}`}
                        className="btn btn-sm bg-transparent border-2 border-[#A91D3A] hover:border-[#A91D3A] text-[#A91D3A]"
                      >
                        Update
                      </Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllBooksTable;
