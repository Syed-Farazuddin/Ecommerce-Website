import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navdata } from "./data";
import { FaShoppingBasket } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
import { GlobalContext } from "../../context/context";

function Navbar() {
  const { userAuth, setUserAuth } = useContext(GlobalContext);
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
          Shopify <GiShoppingBag />
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
            <Link
              to={`/login`}
              onClick={() => {
                handleLogout();
              }}
            >
              <li
                className={`flex justify-center items-center gap-1 text-lg hover:text-red-400`}
              >
                Logout
                <p>
                  <FaRegCircleUser />
                </p>
              </li>
            </Link>
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
