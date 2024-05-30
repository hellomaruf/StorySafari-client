import { Rate } from "antd";
import useReadBooks from "../Hooks/useReadBooks";

function OnlineRead() {
  const { onlineReadBooks } = useReadBooks();
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 my-16">
      {onlineReadBooks?.map((books, index) => (
        <div key={index} className="">
          <div className=" flex gap-4">
            <div className="">
              <img
                className="max-w-[200px] rounded-xl"
                src={books?.img}
                alt=""
              />
            </div>
            <div className="">
              <h2 className=" text-xl font-semibold pb-2">{books?.name}</h2>
              <p>{books?.short_description}</p>
              <div className="mt-6 space-y-2">
                <Rate defaultValue={books?.rating} />
                <p className="text-2xl font-semibold text-[#A91D3A]">
                  ${books?.price}
                </p>
              </div>
              <div className="mt-4">
                <button className="btn rounded-full bg-[#A91D3A] hover:bg-[#C2405A] border-none text-white ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OnlineRead;
