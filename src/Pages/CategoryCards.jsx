// import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

import { Rate } from "antd";
import { Link } from "react-router-dom";
function CategoryCards() {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-xl lg:text-2xl mx-6 lg:mx-0 font-semibold py-6">
        This category has {books.length} items
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-6 lg:mx-0 gap-5 ">
        {books.map((book, index) => (
          <div key={index} className="card bg-base-200 shadow-md">
            <figure className="p-4 relative">
              <img src={book?.photo} alt="Shoes" className="rounded-xl  " />
              <h3 className="absolute text-white text-xl font-medium left-4 top-4 bg-[#A91D3A] px-4 py-1 rounded-tl-xl rounded-br-xl">
                {book?.category_name}
              </h3>
            </figure>
            <div className=" px-6  py-4 pb-6 ">
              <h2 className="card-title text-xl">{book?.book_name}</h2>
              <p className="py-2">Author : {book?.author_Name}</p>

              <div className="py-2">
                <Rate defaultValue={book?.rating} />
              </div>
              <div className="card-actions">
                <Link
                  to={`/bookDetails/${book?._id}`}
                  className="btn bg-[#A91D3A] hover:bg-[#af445a] text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCards;
