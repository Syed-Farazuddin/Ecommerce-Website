import { useState } from "react";
import { Link } from "react-router-dom";
import { Navdata } from "./data";
import { FaShoppingBasket } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";

function Navbar() {
  const [active, setActive] = useState("Home");
  console.log(active);
  return (
    <div className="p-4 shadow-xl fixed top-0 right-0 left-0 flex justify-between z-50 bg-white">
      <Link to={"/"}>
        <h1 className="font-bold text-4xl font-serif flex items-center justify-center text-red-400 gap-2">
          Shopify <GiShoppingBag />
        </h1>
      </Link>
      <ul className="flex gap-8 justify-center items-center">
        {Navdata.map((item, index) => (
          <Link key={index} to={`/${item === "Home" ? "" : item}`}>
            <li
              className={`${
                active === item ? "border-b-2 border-slate-900" : " "
              } flex justify-center items-center gap-1 text-lg`}
              onClick={() => {
                setActive(item);
              }}
            >
              {item}{" "}
              {item === "Cart" ? (
                <p>
                  <FaShoppingBasket />
                </p>
              ) : item === "Login" ? (
                <p>
                  <FaRegCircleUser />
                </p>
              ) : (
                ""
              )}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
