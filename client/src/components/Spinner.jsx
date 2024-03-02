import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { useNavigate, useLocation } from "react-router-dom";

function Spinner() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);
  return (
    <div className="h-[100vh] flex flex-col gap-10 items-center justify-center">
      <h1 className="text-2xl font-bold">Redirecting you in {count} seconds</h1>
      <Circles
        height="150"
        width="150"
        color="#000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
