import { Rate } from "antd";
import { useLoaderData } from "react-router-dom";

function BookDetails() {
  const book = useLoaderData();
  console.log(book);
  const {
    category_name,
    description,
    photo,
    author_Name,
    rating,
    quantity,
    book_name,
  } = book;
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
            <button className="btn bg-[#A91D3A] hover:bg-[#c54861] text-white mt-4">
              Borrow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
