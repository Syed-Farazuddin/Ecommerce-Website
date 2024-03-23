import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { GlobalContext } from "../../context/context";
const AdminDashboard = () => {
  const { userAuth } = useContext(GlobalContext);
  return (
    <Layout>
      <div className="mt-20 flex items-center justify-center gap-10 m-3 p-3">
        <div className="">
          <AdminMenu />
        </div>
        <div className="flex-1">
          <div className="border-[1px] border-slate-200 px-4 py-2">
            <h1>
              <span className="font-bold">User: </span> {userAuth?.user?.name}
            </h1>
            <h1>
              <span className="font-bold">Email: </span>
              {userAuth?.user?.email}
            </h1>
            <h1>
              <span className="font-bold">Contact: </span>
              {userAuth?.user?.phone}
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
