import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context.jsx";
import Spinner from "../Spinner.jsx";
import { Outlet } from "react-router-dom";
import axios from "axios";

function AdminRoutes() {
  const { userAuth } = useContext(GlobalContext);
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/v1/admin-auth"
      );
      console.log("admin route - ", response);
      if (response.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (userAuth?.token) {
      authCheck();
    }
  }, [userAuth]);
  return ok ? <Outlet /> : <Spinner path="" />;
}
export default AdminRoutes;
