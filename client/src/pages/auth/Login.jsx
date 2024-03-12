import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";
import { GlobalContext } from "../../context/context";
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline } from "react-icons/io5";

function Login() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidPass, setInvalidPass] = useState(false);
  const navigate = useNavigate();
  const { userAuth, setUserAuth } = useContext(GlobalContext);

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/login", {
      email,
      password,
    });
    console.log(response);
    if (response?.data?.message === "Invalid password") {
      setInvalidPass(true);
    }
    if (response?.data?.success) {
      toast.success(response.data.message);
      setUserAuth({
        ...userAuth,
        user: response.data.user,
        token: response.data.token,
      });
      localStorage.setItem("auth", JSON.stringify(response.data));
      navigate(location.state || "/");
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <Layout title={"login"}>
      <div className="flex items-center h-[100vh]">
        <div className="w-[80%] flex justify-center items-center ml-20">
          <img src={"/bluelogin.png"} alt="" />
        </div>
        <div className="w-full flex flex-col justify-center mr-20 border-2 border-slate-200 rounded-lg p-12 gap-6">
          <h1 className="text-3xl text-blue-600 font-serif font-bold text-center">
            {" "}
            Login page
          </h1>
          <form
            className="flex flex-col gap-4"
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex justify-between border-[1px] items-center border-slate-400 px-6 py-2 rounded-md ">
              <input
                value={email}
                className="outline-none border-none"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span className="text-slate-400 text-[20px]">
                <HiOutlineMail />
              </span>
            </div>

            <div className="flex justify-between border-[1px] items-center border-slate-400 px-6 py-2 rounded-md ">
              <input
                value={password}
                className="outline-none border-none"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span className="text-slate-400 text-[20px]">
                <IoLockClosedOutline />
              </span>
            </div>

            <p className="text-red-500">
              {invalidPass
                ? "Incorrect password! Please check your password"
                : ""}
            </p>
            <button
              type="submit"
              className="bg-blue-400 font-bold rounded-lg py-2 text-white"
            >
              Login
            </button>
          </form>

          <h4 className="text-lg flex  gap-1 items-center justify-center">
            <p className="text-zinc-500"> Haven&apos;t Registered yet ?</p>
            <span className="text-blue-600 hover:underline">
              <Link to={"/register"}>Register Now</Link>
            </span>
          </h4>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
