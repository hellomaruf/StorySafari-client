import logo from "../assets/images/logo.png";
// import footer from "../assets/images/footer2.svg";
function Footer() {
  return (
    <div>
      <div className="pt-10">
        <div
          style={{
            backgroundImage: `url('https://i.postimg.cc/X7dfSvwP/Screenshot-2024-05-14-163033.png')`,
          }}
          className="bg-[#e8e8e8] z-10 w-full bg-cover"
        >
          <footer className="footer p-10 py-24 text-base-content max-w-7xl mx-auto">
            <aside className="max-w-sm">
              <div className="flex gap-2 items-center ">
                <img className="w-10 rounded-full border-2 " src={logo} alt="" />
                <a className="text-3xl font-extrabold text-white">
                  Story<span className="font-light">Safari</span>
                </a>
              </div>
              <p className="py-6 text-gray-200">
                A story can always break into pieces while it sits inside a book
                on a shelf; and, decades after we have read it even twenty
                times, it can open us up, by cut or caress, to a new truth.
              </p>
              <div className="">
                <i className=" text-2xl text-white pr-3 ri-facebook-box-fill"></i>
                <i className=" text-2xl text-white pr-3 ri-twitter-x-line"></i>
                <i className=" text-2xl text-white pr-3 ri-instagram-fill"></i>
                <i className=" text-2xl text-white pr-3 ri-linkedin-box-fill"></i>
              </div>
            </aside>
            <nav className="space-y-2">
              <h6 className="font-medium text-lg text-white">Services</h6>
              <a className="link link-hover text-gray-300">Branding</a>
              <a className="link link-hover text-gray-300">Design</a>
              <a className="link link-hover text-gray-300">Marketing</a>
              <a className="link link-hover text-gray-300">Advertisement</a>
            </nav>
            <nav className="space-y-2">
              <h6 className="font-medium text-lg text-white">Company</h6>
              <a className="link link-hover text-gray-300">About us</a>
              <a className="link link-hover text-gray-300">Contact</a>
              <a className="link link-hover text-gray-300">Jobs</a>
              <a className="link link-hover text-gray-300">Press kit</a>
            </nav>
            <nav className="space-y-2">
              <h6 className="font-medium text-lg text-white">Legal</h6>
              <a className="link link-hover text-gray-300">Terms of use</a>
              <a className="link link-hover text-gray-300">Privacy policy</a>
              <a className="link link-hover text-gray-300">Cookie policy</a>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
