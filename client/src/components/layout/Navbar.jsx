import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navdata } from "./data";
import { FaShoppingBasket } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
import { GlobalContext } from "../../context/context";

function Navbar() {
  const { userAuth, setUserAuth } = useContext(GlobalContext);
  const [closeDropdown, setCloseDropdown] = useState(true);
  const handleLogout = () => {
    setUserAuth({
      ...userAuth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div className="p-4 shadow-xl fixed top-0 right-0 left-0 flex justify-between z-50 bg-white">
      <Link to={"/"}>
        <h1 className="font-bold text-4xl font-serif flex items-center justify-center text-red-400 gap-2">
          Shoppers <GiShoppingBag />
        </h1>
      </Link>
      <ul className="flex gap-8 justify-center items-center">
        <Link to={`/`}>
          <li
            className={`flex justify-center items-center gap-1 text-lg hover:text-red-400`}
          >
            Home
          </li>
        </Link>
        <Link to={`/category`}>
          <li
            className={`flex justify-center items-center gap-1 text-lg hover:text-red-400`}
          >
            Category
          </li>
        </Link>
        {!userAuth.token ? (
          <>
            <Link to={`/login`}>
              <li
                className={`flex justify-center items-center gap-1 text-lg hover:text-red-400`}
              >
                Login
                <p>
                  <FaRegCircleUser />
                </p>
              </li>
            </Link>
          </>
        ) : (
          <>
            <div className="relative inline-block text-left">
              <div
                onClick={() => {
                  setCloseDropdown((prev) => !prev);
                }}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 border-[1px] border-slate-300 p-2 rounded-lg hover:bg-slate-50 capitalize"
                  id="menu-button"
                >
                  {userAuth?.user?.name.slice(0, 10)}
                  {userAuth?.user?.name.length > 10 ? "..." : ""}
                  <p>
                    <FaRegCircleUser />
                  </p>
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>
              </div>

              <div
                className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${
                  closeDropdown ? "hidden" : ""
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <Link
                    to={`/dashboard/${
                      userAuth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    <li
                      className={`flex px-4 py-2 gap-1 text-lg hover:text-red-500 hover:font-bold hover:bg-slate-100`}
                    >
                      Dashboard
                    </li>
                  </Link>
                  <Link
                    to={`/login`}
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    <li
                      className={`flex px-4 py-2 gap-1 text-lg hover:text-red-500 hover:font-bold hover:bg-slate-100`}
                    >
                      Logout
                    </li>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        <Link to={`/cart`}>
          <li
            className={`flex justify-center items-center gap-1 text-lg hover:text-red-400`}
          >
            Cart
            <p>
              <FaShoppingBasket />
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
