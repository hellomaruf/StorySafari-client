import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
function Nav() {
  const { user, logoutUser, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser();
    setUser();
  };
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#A91D3A] pr-4" : "text-gray-900 pr-4"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/addBooks"
        className={({ isActive }) =>
          isActive ? "text-[#A91D3A] pr-4" : "text-gray-900 pr-4"
        }
      >
        Add Books
      </NavLink>
      <NavLink
        to="/allBooks"
        className={({ isActive }) =>
          isActive ? "text-[#A91D3A] pr-4" : "text-gray-900 pr-4"
        }
      >
        All Books
      </NavLink>
      <NavLink
        to="/borrowedBooks"
        className={({ isActive }) =>
          isActive ? "text-[#A91D3A] pr-4" : "text-gray-900 pr-4"
        }
      >
        Borrowed Books
      </NavLink>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto my-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo} className="w-10" alt="" />
            <h2 className="font-bold text-3xl">
              Story<span className="font-light text-[#A91D3A]">Safari</span>
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="btn bg-[#A91D3A] hover:bg-[#c2405a] text-white"
              >
                Logout
              </button>
              <div className="avatar pl-3">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#A91D3A] hover:bg-[#c2405a] text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
