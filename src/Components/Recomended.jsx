// import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/images/reco.png";
import img1 from "../assets/images/reco1.png";
import img2 from "../assets/images/reco2.png";
import img3 from "../assets/images/reco3.png";
import img4 from "../assets/images/reco4.png";
import img5 from "../assets/images/reco5.png";
import img6 from "../assets/images/reco6.png";
import img7 from "../assets/images/reco7.png";
import Marquee from "react-fast-marquee";
import footer from "../assets/images/recoBg1.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";
function Recomended() {
  return (
    <div className="max-w-7xl  mx-auto py-20 gap-8">
      <div
        style={{
          backgroundImage: `url(${footer})`,
        }}
        className="p-10 bg-cover grid grid-cols-2 items-center justify-center gap-8 rounded-2xl shadow-md bg-[#A91D3A] text-gray-50 space-y-5"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Recomended For You</h2>
          <p className="">
            A library is a good place to go when you feel unhappy, for there, in
            a book, you may find encouragement and comfort. A library is a good
            place to go when you feel bewildered or undecided, for there, in a
            book, you may have your question answered. Books are good company,
            in sad times and happy times, for books are people - people who have
            managed to stay alive by hiding between the covers of a book
          </p>
          <button className="btn bg-gray-100">Explore More</button>
        </div>
        <div className="">
          {/* <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className=" w-56" src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" w-56" src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" w-56" src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" w-56" src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" w-56" src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" w-56" src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" w-56" src={img6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" w-56" src={img7} alt="" />
            </SwiperSlide>
          </Swiper> */}

          <Marquee gradient gradientColor="#A91D3A" gradientWidth={100} className="flex gap-4">
            <div className="px-3">
              <img className=" w-56" src={img7} alt="" />
            </div>
            <div className="px-3">
              <img className=" w-56" src={img6} alt="" />
            </div>
            <div className="px-3">
              <img className=" w-56" src={img5} alt="" />
            </div>
            <div className="px-3">
              <img className=" w-56" src={img4} alt="" />
            </div>
            <div className="px-3">
              <img className=" w-56" src={img3} alt="" />
            </div>
            <div className="px-3">
              <img className=" w-56" src={img} alt="" />
            </div>
            <div className="px-3">
              <img className=" w-56" src={img1} alt="" />
            </div>
            <div className="px-3">
              <img className=" w-56" src={img2} alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Recomended;
