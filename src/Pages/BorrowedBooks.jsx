import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Services/AuthProvider";
import Swal from "sweetalert2";
// import { useLoaderData } from "react-router-dom";

function BorrowedBooks() {
  // const borrowedBooks = useLoaderData();
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/borrowed/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks(data);
        setDisplayBooks(data);
      });
  }, []);

  const handleReturn = (book_id, quantity, borrow_id) => {
    axios
      .patch(`${import.meta.env.VITE_API_URL}/return/${book_id}`, quantity)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          Swal.fire({
            confirmButtonColor: "#A91D3A",
            title: "Return Book Successfully!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .delete(`${import.meta.env.VITE_API_URL}/borrowedBook/${borrow_id}`)
      .then((res) => {
        console.log(res.data);

        const remaining = borrowedBooks.filter(
          (book) => book?._id !== borrow_id
        );
        setBorrowedBooks(remaining);
        setDisplayBooks(remaining);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(borrowedBooks);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold py-6">
        You borrowed {borrowedBooks.length} books
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {displayBooks.map((book, index) => (
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
                  onClick={() =>
                    handleReturn(book?.book_id, book?.quantity, book?._id)
                  }
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
