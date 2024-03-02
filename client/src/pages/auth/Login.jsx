import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";
import { GlobalContext } from "../../context/context";

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
        <div className="w-[60%] flex justify-center items-center ml-20">
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
            <input
              value={email}
              className=" px-6 outline-none py-2 rounded-md border-[1px]  border-slate-400"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              value={password}
              className=" px-6 outline-none py-2 rounded-md border-[1px]  border-slate-400"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

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
