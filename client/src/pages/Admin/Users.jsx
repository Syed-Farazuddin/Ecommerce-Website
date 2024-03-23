import React from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";

function Users() {
  return (
    <Layout>
      <div className="mt-20 flex items-center justify-center gap-10 m-3 p-3">
        <div className="">
          <AdminMenu />
        </div>
        <div className="flex-1">
          <div className="border-[1px] border-slate-200 px-4 py-2">
            All Users
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Users;
