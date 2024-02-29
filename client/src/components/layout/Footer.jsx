import React from "react";
import { Link } from "react-router-dom";
import { Footerdata } from "./data";
function Footer() {
  return (
    <div className="bg-zinc-500 text-white text-center p-4 gap-2 flex flex-col justify-center items-center">
      <h1 className="font-bold font-serif">All rights reserved @xyz-company</h1>
      <ul className="flex gap-8">
        {Footerdata.map((item, index) => (
          <Link to={`/${item}`} key={index}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
