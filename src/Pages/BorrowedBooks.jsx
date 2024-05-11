import { useLoaderData } from "react-router-dom";

function BorrowedBooks() {
  const borrowedBooks = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold py-6">
        You borrowed {borrowedBooks.length} books
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {borrowedBooks.map((book, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="p-4 relative">
              <img src={book?.photo} alt="Shoes" className="rounded-xl" />
              <h3 className="absolute text-white text-xl font-medium left-4 top-4 bg-[#A91D3A] px-4 py-1 rounded-tl-xl rounded-br-xl">
                {book?.category_name}
              </h3>
            </figure>
            <div className=" px-6  py-4 pb-6 ">
              <h2 className="card-title text-xl">{book?.book_name}</h2>
              <div className="py-3">
                <p className="">
                  Borrowed Date :{" "}
                  <span className="bg-orange-100 rounded-full py-1 px-3 text-sm font-bold">
                    {book?.current_date}
                  </span>
                </p>
                <p className="pt-2">
                  Return Date :{" "}
                  <span className="bg-orange-100 rounded-full py-1 px-3 text-sm font-bold">
                    {book?.return_date}
                  </span>
                </p>
              </div>

              <div className="py-2"></div>
              <div className="card-actions">
                <button
                 
                  className="btn bg-[#A91D3A] hover:bg-[#af445a] text-white"
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BorrowedBooks;
