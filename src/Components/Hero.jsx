import heroBook from "../assets/images/heroBook.png";
import heroBook1 from "../assets/images/heroBook1.png";
import heroBook2 from "../assets/images/heroBook2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

// import "./styles.css";
function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 items-center gap-6 my-12">
        <div className="col-span-1 ">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold font-poppins">
              Books are mirrors You only see in them what you already have
              inside you.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos vel, quos ipsa sequi qui ex.
            </p>
            <button className="btn  text-white bg-[#A91D3A]">Learn More</button>
          </div>
          <div className="stats shadow pt-6">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="px-16">
                <img src={heroBook} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="px-16">
                <img src={heroBook1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="px-16">
                <img src={heroBook2} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Hero;
