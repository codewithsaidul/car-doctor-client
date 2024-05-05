import { Link, NavLink } from "react-router-dom";
import LOGO from '../../../assets/icons/logo.svg'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar w-full max-w-[1140px] mx-auto">
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img className="w-12 h-12 sm:w-16 sm:h-16" src={LOGO} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF3811] font-semibold text-2xl"
                  : "text-[#444444] font-semibold  border-primary text-2xl"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF3811] font-semibold text-2xl"
                  : "text-[#444444] font-semibold  border-primary text-2xl"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/serevices"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF3811] font-semibold text-2xl"
                  : "text-[#444444] font-semibold  border-primary text-2xl"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF3811] font-semibold text-2xl"
                  : "text-[#444444] font-semibold  border-primary text-2xl"
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF3811] font-semibold text-2xl"
                  : "text-[#444444] font-semibold  border-primary text-2xl"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end space-x-5">
          <div className="flex space-x-5">
            <CiShoppingCart size={24} />
            <FaMagnifyingGlass size={24} />
          </div>

          <button className="border border-[#FF3811] rounded-[500px_300px_200px_150px] py-2 px-5 text-[#FF3811] text-lg font-semibold hover:bg-[#FF3811] hover:text-white duration-1000 hover:duration-1000">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar