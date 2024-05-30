import { Rate } from "antd";
import useReadBooks from "../Hooks/useReadBooks";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import axios from "axios";
import useCart from "../Hooks/useCart";
import Swal from "sweetalert2";
import Lottie from "react-lottie";
import loader from "../assets/images/loader.json";

function OnlineRead() {
  const [onlineReadBooks, , isLoading] = useReadBooks();
  const [, refetch] = useCart();
  // const [,,isLoading] = useReadBooks()
  const { user } = useContext(AuthContext);
  const handleAddToCart = async (book) => {
    const bookInfo = {
      book_id: book?._id,
      name: book?.name,
      price: book?.price,
      image: book?.img,
      email: user?.email,
    };
    console.log(bookInfo);
    await axios
      .post("https://storysafari.vercel.app/cartData", bookInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            confirmButtonColor: "#A91D3A",
            title: "Add to cart Successfully!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
        refetch();
      });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
  };
  return isLoading ? (
    <>
      <div className="max-w-44 mx-auto h-96 flex items-center justify-center">
        <Lottie options={defaultOptions}></Lottie>
      </div>
    </>
  ) : (
    <>
      <div className="mx-4 lg:mx-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          {onlineReadBooks?.map((books, index) => (
            <div key={index} className="">
              <div className=" md:flex gap-4">
                <div className="">
                  <img
                    className="max-w-full pb-3 md:pb-0 md:max-w-[200px] rounded-xl"
                    src={books?.img}
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className=" text-2xl md:text-xl font-semibold pb-2">
                    {books?.name}
                  </h2>
                  <p className="text-sm md:text-base">
                    {books?.short_description}
                  </p>
                  <div className="mt-2 md:mt-5 space-y-2">
                    <Rate defaultValue={books?.rating} />
                    <p className="text-2xl font-semibold text-[#A91D3A]">
                      ${books?.price}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-4">
                    <button
                      onClick={() => handleAddToCart(books)}
                      className="btn rounded-full bg-[#A91D3A] hover:bg-[#C2405A] border-none text-white "
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OnlineRead;
