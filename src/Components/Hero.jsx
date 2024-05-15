import heroBook from "../assets/images/heroImg3.png";
import heroBook1 from "../assets/images/heroImg2.png";
import heroBook3 from "../assets/images/heroImg1.png";
import img from "../assets/images/i1.jpeg";
import img2 from "../assets/images/i2.jpeg";
import img3 from "../assets/images/i3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { Slide } from "react-awesome-reveal";

// import "./styles.css";
function Hero() {
  return (
    <div className="max-w-7xl  mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-6 items-center gap-6 lg:gap-9 my-16 lg:my-24">
        <div className="col-span-1 text-center lg:text-left">
          <div className="space-y-6">
            <Slide damping={0.1} cascade>
              <h1 className="text-4xl lg:text-5xl font-bold -z-10 font-poppins">
                Books are mirrors You only see in them what you already have
                inside you.
              </h1>
              <p>
                A library is like an island in the middle of a vast sea of
                ignorance, particularly if the library is very tall and the
                surrounding area has been flooded.
              </p>
              <button className="btn  text-white bg-[#A91D3A]">
                Learn More
              </button>
              <div className="flex  lg:block items-center justify-center">
                <div className="bg-base-100 border-2 border-[#A91D3A] flex flex-col items-center justify-center rounded-lg  w-60 p-6">
                  <div className="pb-2 font-medium">12k+ People Joined</div>
                  <div className="avatar-group  -space-x-6 rtl:space-x-reverse">
                    <div className="avatar">
                      <div className="w-12">
                        <img src={img} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src={img2} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src={img3} />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-[#A91D3A] text-neutral-content">
                        <span>+12k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        <Slide direction="right">
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
                <div className="px-2">
                  <img src={heroBook} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-2">
                  <img src={heroBook1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-2">
                  <img src={heroBook3} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Hero;
