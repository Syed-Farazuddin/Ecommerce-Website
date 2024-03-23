import React from "react";
import { NavLink } from "react-router-dom";
function AdminMenu() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-slate-700 font-bold text-3xl">Admin Panel</h1>
        <div className="flex flex-col ">
          <NavLink
            className={
              "border-[1px] border-slate-400 hover:bg-slate-100 text-center py-2 px-4"
            }
            to={"/dashboard/admin/create-category"}
          >
            Create Category
          </NavLink>
          <NavLink
            className={
              "border-[1px] border-slate-400 hover:bg-slate-100 text-center py-2 px-4"
            }
            to={"/dashboard/admin/create-product"}
          >
            Create Product
          </NavLink>
          <NavLink
            className={
              "border-[1px] border-slate-400 hover:bg-slate-100 text-center py-2 px-4"
            }
            to={"/dashboard/admin/users"}
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default AdminMenu;
