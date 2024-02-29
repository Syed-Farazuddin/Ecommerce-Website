import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center flex-col gap-4 py-10">
        <h1 className="font-bold flex font-serif text-xl items-center justify-center gap-4 flex-col">
          <p className="font-extrabold">OOPS! This page doesn&apos;t exists!</p>
          <span>
            <Link to={"/"}>
              <button className="bg-slate-800 p-2 rounded-md  text-white">
                Go back
              </button>
            </Link>
          </span>
        </h1>
        <img src="/pnf2.jpg" className="w-[500px] rounded-xl" alt="" />
      </div>
    </Layout>
  );
}

export default PageNotFound;
