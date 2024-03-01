import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    console.log(name, email, password, address, phone);
    const response = await axios.post("http://localhost:8080/api/v1/register", {
      name,
      email,
      password,
      address,
      phone,
    });
    console.log(response);
    if (response?.data?.success) {
      toast.success(response.data && response.data.message);
      navigate("/login");
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <Layout>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-[60%] m-20 flex flex-col items-center justify-center">
          <img src="/shop.png" alt="" />
        </div>
        <div className="w-full flex flex-col mr-20 border-[2px] border-slate-200 rounded-lg p-12 gap-6">
          <h1 className="font-serif text-xl font-bold  text-red-400 text-center">
            Register page
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
              value={name}
              className=" px-6 outline-none py-2 rounded-md border-[1px] border-slate-400"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              value={email}
              className=" px-6 outline-none py-2 rounded-md border-[1px] border-slate-400"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              value={password}
              className=" px-6 outline-none py-2 rounded-md border-[1px] border-slate-400"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input
              value={phone}
              className=" px-6 outline-none py-2 rounded-md border-[1px] border-slate-400"
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <input
              value={address}
              className=" px-6 outline-none py-2 rounded-md border-[1px] border-slate-400"
              type="text"
              placeholder="Enter your Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-red-400 font-bold rounded-lg py-2 text-white"
            >
              Register
            </button>
          </form>
          <h4 className="text-lg flex  gap-1 items-center justify-center">
            <p className="text-zinc-500"> Already have an account?</p>
            <span className="text-red-400 font-serif  p-2 font-semibold rounded-lg hover:underline">
              <Link to={"/login"}>Login Now</Link>
            </span>
          </h4>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
