import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

function UpdateBooks() {
  const { user } = useContext(AuthContext);
  const book = useLoaderData();
  console.log(book);
  const { _id, category_name, book_name, rating, photo } = book;
  const handleAddBooks = (e) => {
    e.preventDefault();
    const form = e.target;
    const category_name = form.cateName.value;
    const book_name = form.bookName.value;
    const rating = form.rating.value;
    const author_Name = form.authName.value;
    const photo = form.photo.value;

    const booksInfo = {
      _id,
      category_name,
      book_name,
      rating,
      author_Name,
      photo,
    };

    axios
      .put(`${import.meta.env.VITE_API_URL}/update/${_id}`, booksInfo)
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          Swal.fire({
            confirmButtonColor: "#A91D3A",
            title: "Book Update Successfully!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="">
        <div className="text-center py-10 pb-36 bg-gradient-to-r from-[#710d21] to-[#A91D3A] text-white">
          <div className="mx-6">
          <h2 className="font-right text-3xl font-semibold">Update Books</h2>
          <p className="py-2 max-w-2xl mx-auto">
            Both reading and writing are experiences – lifelong – in the course
            of which we who encounter words used in certain ways are persuaded
            by them to be brought mind and heart within the presence, the power,
            of the imagination
          </p>
         </div>
        </div>
        <div className="mx-2">
          <div className=" max-w-7xl mx-auto relative -top-28">
            <form
              onSubmit={handleAddBooks}
              noValidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-2xl shadow-sm  border-2 bg-base-100 border-[#A91D3A]">
                <div className="grid grid-cols-6 gap-4 col-span-full ">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="firstname" className="text-lg font-medium">
                      Category Name
                    </label>
                    <select
                      defaultValue={category_name}
                      className="w-full rounded-md focus:border-[#A91D3A]  p-2 outline-none border"
                      name="cateName"
                      id="cars"
                    >
                      <option value="Novel">Novel</option>
                      <option value="Biographies">Biographies</option>
                      <option value="Comics">Comics</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Health">Health</option>
                      <option value="Cookbooks">Cookbooks</option>
                      <option value="Travel">Travel</option>
                      <option value="History">History</option>
                    </select>
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-lg font-medium">
                      Book Name
                    </label>
                    <input
                      defaultValue={book_name}
                      required
                      name="bookName"
                      type="text"
                      placeholder="Enter Book Name"
                      className="w-full border focus:border-[#A91D3A] rounded-md p-2 outline-none  "
                    />
                  </div>
                </div>

                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Rating
                  </label>
                  <input
                    required
                    defaultValue={rating}
                    name="rating"
                    type="number"
                    placeholder="Enter Rating"
                    className="w-full focus:border-[#A91D3A] rounded-md  p-2 outline-none border"
                  />
                </div>

                <div className="grid grid-cols-6 gap-4 col-span-full ">
                  <div className="col-span-full ">
                    <label htmlFor="firstname" className="text-lg font-medium">
                      Author Name
                    </label>
                    <input
                      required
                      defaultValue={user?.displayName}
                      name="authName"
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full focus:border-[#A91D3A] rounded-md  p-2 outline-none border"
                    />
                  </div>

                  <div className="col-span-full ">
                    <label htmlFor="firstname" className="text-lg font-medium">
                      Photo
                    </label>
                    <input
                      required
                      defaultValue={photo}
                      name="photo"
                      type="text"
                      placeholder="Enter Photo URL"
                      className="w-full focus:border-[#A91D3A] rounded-md  p-2 outline-none border"
                    />
                  </div>

                  <div className="">
                    <input
                      className="bg-[#A91D3A] hover:bg-[#cf3a58] btn text-white   py-2 font-bold  rounded-lg"
                      type="submit"
                      value="Update Book"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateBooks;
