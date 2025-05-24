import React, { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { API } from "../../features/getProducts/GetProduct";
import { Link } from "react-router";

const nameMachenic = z
  .string()
  .max(10, { message: "Not more then 10 letters" })
  .min(3, { message: "More then 3 letters" });
const emailMachenic = z.string().email({ message: "Incorrect Email" });
const passwordMachenic = z.string().max(8, { message: "Use 8 letters" });
const phoneMachenic = z.string().max(9, { message: "Not more 9" });

const SignUp = () => {
  const [inpName, setInpName] = useState("");
  const [openLogin, setOpenLogin] = useState("");
  const [inpEmail, setInpEmail] = useState("");
  const [inpPhone, setInpPhone] = useState("");
  const [inpPassword, setInpPassword] = useState("");
  const [inpCheckPass, setCheckPass] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  async function funAdd() {
    let resultName = nameMachenic.safeParse(inpName);
    let resultEmail = emailMachenic.safeParse(inpEmail);
    let resultPhone = phoneMachenic.safeParse(inpPhone);
    let resultPass = passwordMachenic.safeParse(inpPassword);

    if (
      !resultEmail.success ||
      !resultName.success ||
      !resultPass.success ||
      !resultPhone.success
    ) {
      setErrorName(resultName.error.format()?._errors?.[0]);
      setErrorEmail(resultEmail.error.format()?._errors?.[0]);
      setErrorPhone(resultPhone.error.format()?._errors?.[0]);
      setErrorPass(resultPass.error.format()?._errors?.[0]);
      return;
    } else {
      try {
        let newUser = {
          userName: inpName,
          phoneNumber: inpPhone,
          email: inpEmail,
          password: inpPassword,
          confirmPassword: inpCheckPass,
        };
        await axios.post(`${API}/Account/register`, newUser);
        setOpenLogin("Login");
        window.location = "login";
      } catch (error) {
        console.error(error);
        setOpenLogin(
          "here is something Incorrect or this account has been created"
        );
      }
    }
  }
  return (
    <div className="md:h-[900px] h-[500px] flex justify-center items-center">
      <section className="max-w-[1700px] m-auto flex flex-col md:w-[500px] gap-3 w-[90%]">
        <h2 className="md:text-5xl text-3xl">Create an account</h2>
        <p className="text-2xl">Enter your details below</p>
        <input
          value={inpName}
          onChange={(e) => setInpName(e.target.value)}
          className="border-1 py-2 px-3 rounded-[5px]"
          type="text"
          placeholder="Name"
        />
        {errorName && <p className="text-red-600 text-[14px]">{errorName}</p>}
        <input
          value={inpPhone}
          onChange={(e) => setInpPhone(e.target.value)}
          className="border-1 py-2 px-3 rounded-[5px]"
          type="number"
          placeholder="Phone Number"
        />
        {errorPhone && <p className="text-red-600 text-[14px]">{errorPhone}</p>}
        <input
          value={inpEmail}
          onChange={(e) => setInpEmail(e.target.value)}
          className="border-1 py-2 px-3 rounded-[5px]"
          type="text"
          placeholder="Email"
        />
        {errorEmail && <p className="text-red-600 text-[14px]">{errorEmail}</p>}
        <input
          value={inpPassword}
          onChange={(e) => setInpPassword(e.target.value)}
          className="border-1 py-2 px-3 rounded-[5px]"
          type="password"
          placeholder="Password"
        />
        {errorPass && <p className="text-red-600 text-[14px]">{errorPass}</p>}
        <input
          value={inpCheckPass}
          onChange={(e) => setCheckPass(e.target.value)}
          className="border-1 py-2 px-3 rounded-[5px]"
          type="password"
          placeholder="Config Password"
        />
        <button
          className="bg-[#DB4444] py-3 rounded-[5px] text-[18px] text-white"
          onClick={funAdd}
        >
          Create Account
        </button>
        {openLogin == "Login" ? (
          <Link to={"/login"}>
            <p className="text-green-700">click here for Login</p>
          </Link>
        ) : (
          <p className="text-red-700">{openLogin}</p>
        )}
        <p className="text-[18px]">
          Already have account?{" "}
          <Link to={"/login"} className="font-bold border-b-1 text-green-500">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignUp;
