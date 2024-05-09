import { Link } from "react-router-dom";
import errorImg from "../assets/images/error.json";
import Lottie from "react-lottie";

function Error() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorImg,
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-2">
        <div className="max-w-sm">
          <Lottie options={defaultOptions}/>
        </div>
        <h3 className="font-semibold text-3xl">Opps Page Not Found</h3>
        <p>Sorry The Page you are looking for doesn,t exist</p>
        <div className="pt-4">
          <Link
            to="/"
            className="btn bg-[] rounded-full bg-[#A91D3A] hover:bg-[#c2405a] text-white"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
