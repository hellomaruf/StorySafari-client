import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/images/login.json";
import Lottie from "react-lottie";
import { AuthContext } from "../Services/AuthProvider";
import Swal from "sweetalert2";
function Register() {
  const { createNewUser } = useContext(AuthContext);
  console.log(createNewUser);
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createNewUser(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            confirmButtonColor:'#A91D3A',
            title: 'Successfully Register!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
        }
      })
      .catch((error) => console.log(error));
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-6 lg:mx-3 gap-12 my-20  items-center">
          <div className="col-span-1">
            <div data-aos="fade-left" data-aos-duration="900" className="">
              <div className=" space-y-2 text-center">
                <h2 className=" text-2xl lg:text-3xl font-right">
                  Register to your Account
                </h2>
                <p>Welcome back select mathod to Login</p>
              </div>

              <form
                onSubmit={handleRegister}
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
                    type="email"
                    placeholder="Enter your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your Password"
                      className="input input-bordered w-full"
                      required
                    />
                    <p
                      className="cursor-pointer absolute top-3 right-5"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <i className="ri-eye-line"></i>
                      ) : (
                        <i className="ri-eye-off-line"></i>
                      )}
                    </p>
                  </div>
                  {/* <small className="text-red-600 py-1">{passError}</small> */}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#A91D3A] hover:bg-[#c2405a] text-white">
                    Register
                  </button>
                </div>
                <div className="text-center pt-2">
                  <p>
                    {" "}
                    Already have an account?{" "}
                    <Link to="/login" className="text-[#A91D3A] font-bold">
                      Please Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-1 relative">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
