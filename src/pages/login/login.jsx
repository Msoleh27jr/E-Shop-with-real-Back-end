import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  async function funLogin() {
    let loginUser = {
      userName: userName,
      password: password,
    };
    try {
      let { data } = await axios.post(
        "https://store-api.softclub.tj/Account/login",
        loginUser
      );
      setErrorLogin(true);
      localStorage.setItem("accaunt", `${data.data}`);
      window.location = "/"
      console.log(data.data);
    } catch (error) {
      console.error(error);
      setErrorLogin("here something incorrect please check again");
    }
  }
  return (
    <div className="h-[900px] flex justify-center items-center">
      <section className="max-w-[1700px] m-auto flex flex-col md:w-[500px] gap-3 w-[90%]">
        <h2 className="md:text-5xl text-3xl">Log in to Exclusive</h2>
        <p className="text-2xl">Enter your details below</p>
        <input
          type="text"
          className="border-1 py-2 px-3 rounded-[5px]"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          className="border-1 py-2 px-3 rounded-[5px]"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => alert("Maram Namedonm")}
          className="text-red-500 font-bold"
        >
          Forget Password?
        </button>
        <button
          className="bg-[#DB4444] py-3 rounded-[5px] text-[18px] text-white"
          onClick={() => {
            funLogin();
          }}
        >
          Log In
        </button>
        {errorLogin == true ? (
          <p className="text-green-600 text-[18px]">Login Successfully</p>
        ) : (
          <p className="text-red-600 text-[16px]">{errorLogin}</p>
        )}
      </section>
    </div>
  );
};

export default Login;
