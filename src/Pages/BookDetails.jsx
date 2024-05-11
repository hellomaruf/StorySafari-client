import { Rate } from "antd";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

function BookDetails() {
  const { user } = useContext(AuthContext);
  const book = useLoaderData();
  const current_date = new Date().toLocaleDateString();

  const {
    _id,
    category_name,
    description,
    photo,
    author_Name,
    rating,
    quantity,
    book_name,
  } = book;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const return_date = form.reDate.value;

    const borrowInfo = {
      name,
      email,
      return_date,
      current_date,
      book_name,
      category_name,
      photo,
    };
    console.log(borrowInfo);

    axios
      .post(`${import.meta.env.VITE_API_URL}/borrow`, borrowInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          Swal.fire({
            confirmButtonColor: "#A91D3A",
            title: "Borrow Book Successfully!",
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
      .patch(`${import.meta.env.VITE_API_URL}/reduceQua/${_id}`, quantity)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center   mx-6 lg:mx-3">
        <div className="col-span-1 lg:p-10 ">
          <img className=" rounded-xl" src={photo} alt="" />
        </div>
        <div className="col-span-1 py-10 ">
          <div className=" flex mb-3"></div>
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-medium bg-orange-100 text- py-1 px-3 rounded-full">
              {category_name}
            </h1>
            <h2 className="flex items-center justify-center gap-1">
              <i className="ri-star-fill text-xl text-amber-400"></i>

              <Rate defaultValue={rating} />
            </h2>
          </div>
          <h1 className="text-4xl font-semibold py-2 pt-4">{book_name}</h1>
          <div className="">
            <div className="py-3">
              <h2 className="text-xl text-gray-500">
                <i className="ri-account-circle-fill text-2xl pr-2"></i>Author :{" "}
                {author_Name}
              </h2>
            </div>
            <h2 className="text-3xl font-semibold text-[#A91D3A] pt-4">
              Quantity : {quantity} pis
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="space-y-4 max-w-96  bg-gradient-to-b from-[#A91D3A] to-[#560d1c] p-5 rounded-xl text-white my-5">
                <div className="flex justify-between items-center">
                  <div className="text-gray-900 bg-white py-1 px-3 rounded-full font-semibold">
                    Limited Supply
                  </div>
                  <div className="">00/0{quantity}</div>
                </div>
                <div className=" text-gray-200 text-sm">
                  Limited supply books evoke a sense of exclusivity and
                  prestige. Whether its a first edition of a beloved classic or
                  a signed copy by a revered author, these books become
                  cherished treasures for collectors and enthusiasts alike.
                  Their scarcity adds to their allure
                </div>
              </div>
              <div className="p-8  rounded-xl">
                <img className="rounded-xl" src={photo} alt="" />
              </div>
            </div>
            <div className="">
              <h3 className="font-bold text-lg pb-2">Description</h3>
              <p>{description}</p>
            </div>

            {/* The button to open modal */}
            <label
              htmlFor="my_modal_7"
              disabled={quantity === 0}
              className="btn bg-[#A91D3A]  hover:bg-[#c54861] text-white mt-4"
            >
              Borrow
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <form
                  onSubmit={handleSubmit}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className=" col-span-1  mt-2 "
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      defaultValue={user?.displayName}
                      disabled
                      type="text"
                      placeholder="Enter your Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      defaultValue={user?.email}
                      disabled
                      type="email"
                      placeholder="Enter your Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Return Data</span>
                    </label>
                    <input
                      name="reDate"
                      type="date"
                      placeholder="Date"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn bg-[#A91D3A]  hover:bg-[#c2405a] text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
