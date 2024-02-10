import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return;
    }
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-[35px] text-red-600">Login Here</h1>
        <input
          type="name"
          className="min-w-[380px] mb-[10px] outline-none text-[15px] bg-green-400 border border-gray-300 border-opacity-25 border-r-[2px] py-[20px] pl-[15px]"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="min-w-[380px] mb-[10px] outline-none text-[15px] border border-gray-300 border-opacity-25 border-r-[2px] py-[20px] pl-[15px]"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="Password"
          className="min-w-[380px] mb-[10px] outline-none text-[15px] border border-gray-300 border-opacity-25 border-r-[2px] py-[20px] pl-[15px]"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="py-[17px] px-[30px] mt-[10px] bg-black text-white border-none text-[14px] border-r-[3px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
