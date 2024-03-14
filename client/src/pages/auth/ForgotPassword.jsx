import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { HiOutlineMail } from "react-icons/hi";
import toast from "react-hot-toast";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/v1/forgot-password",
      {
        email,
        newPassword,
        answer,
      }
    );
    console.log(response);
    if (response?.data?.success) {
      toast.success(response.data.message);
      navigate(location.state || "/login");
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <Layout title={"login"}>
      <div className="flex items-center h-[100vh]">
        <div className="w-[80%] flex justify-center items-center ml-20">
          <img src={"/fp.png"} alt="" />
        </div>
        <div className="w-full flex flex-col justify-center mr-20 border-2 border-slate-200 rounded-lg p-12 gap-6">
          <h1 className="text-3xl text-[#EF3318] font-serif font-bold text-center">
            Reset your password
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
                value={answer}
                className="outline-none border-none"
                type="text"
                placeholder="What's your favorite sport"
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
              />
              <span className="text-slate-400 text-[20px]">
                <FaQuestion />
              </span>
            </div>
            <div className="flex justify-between border-[1px] items-center border-slate-400 px-6 py-2 rounded-md ">
              <input
                value={newPassword}
                className="outline-none border-none"
                type="password"
                placeholder="Enter your new password"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
              <span className="text-slate-400 text-[20px]">
                <IoLockClosedOutline />
              </span>
            </div>

            <button
              type="submit"
              className="bg-[#EF3318] font-bold rounded-lg py-2 text-white"
            >
              Reset
            </button>
          </form>

          <h4 className="text-lg flex  gap-1 items-center justify-center">
            <p className="text-zinc-500"> Haven&apos;t Registered yet ?</p>
            <span className="text-[#EF3318] hover:underline">
              <Link to={"/register"}>Register Now</Link>
            </span>
          </h4>
        </div>
      </div>
    </Layout>
  );
}

export default ForgotPassword;
