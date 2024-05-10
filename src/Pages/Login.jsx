import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/images/login.json";
import github from "../assets/images/github.png";
import google from "../assets/images/google.png";
import Lottie from "react-lottie";
import { AuthContext } from "../Services/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        navigate(from);
        if (res.user) {
          Swal.fire({
            confirmButtonColor: "#A91D3A",
            title: "Successfully Login!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        navigate(from);

        if (res.user) {
          Swal.fire({
            confirmButtonColor: "#A91D3A",
            title: "Successfully Login!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
      })
      .then((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res) => {
        navigate(from);
        if (res.user) {
          Swal.fire({
            confirmButtonColor: "#A91D3A",
            title: "Successfully Login!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-6 lg:mx-3 gap-12 my-20 items-center  ">
        <div className="col-span-1">
          <div data-aos="fade-left" data-aos-duration="900" className="">
            <div className=" space-y-2 text-center">
              <h2 className=" text-2xl lg:text-3xl font-right">
                Login to your Account
              </h2>
              <p>Welcome back select mathod to Login</p>
            </div>

            <form
              onSubmit={handleLogin}
              data-aos="fade-left"
              data-aos-duration="1000"
              className=" col-span-1  mt-2 "
            >
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#A91D3A] hover:bg-[#c2405a]  text-white">
                  Login
                </button>
              </div>
              <div className="text-center pt-2">
                <p>
                  {" "}
                  Don’t have an account?{" "}
                  <Link to="/register" className="text-[#A91D3A] font-bold">
                    Create an account
                  </Link>
                </p>
              </div>
            </form>
            <div className="divider py-3">OR</div>
            <div className=" mt-4 flex flex-col gap-4 text-center ">
              <button onClick={handleGoogleLogin} className="btn">
                <img className="w-6" src={google} alt="" /> Sign in with Google
              </button>
              <button onClick={handleGithubLogin} className="btn">
                <img className="w-6" src={github} alt="" />
                Sign in with Github
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}

export default Login;
