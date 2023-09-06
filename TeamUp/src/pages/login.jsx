import React from "react";
import { FcGoogle } from "react-icons/fc";

function login() {
  return (
    <div>
      <section className=" bg-blue-100 min-h-screen flex items-center justify-center">
        <div className=" absolute bg-white w-4/5 h-3/4 rounded-2xl shadow-xl flex">
          {/* Left  */}
          <div className=" relative w-1/2 h-full rounded-xl">
            <img src="./teamwork.png" alt="logo" className=" w-40 m-14" />
            <h1 className=" text-6xl font-bold mx-16"> Welcome to </h1>
            <h1 className=" text-6xl font-bold mx-16 mt-4"> TeamUP™ </h1>
          </div>
          {/* Right */}
          <div className=" relative w-[40rem] bg-blue-200 h-[40rem] rounded-2xl m-auto shadow-lg">
            <h1 className=" text-center text-4xl font-semibold mt-6"> Login</h1>
            <div className=" relative bg-white rounded-xl w-2/3 h-16 shadow-md m-auto mt-10 flex">
              <div className=" m-auto ml-4 ">
                {" "}
                <FcGoogle style={{ fontSize: "40px" }} />{" "}
              </div>
              <h1 className="  text-center font-normal text-xl m-auto -ml-14">
                {" "}
                Login with Google{" "}
              </h1>
            </div>
            <p className=" text-center mt-10 text-lg opacity-80">
              ------- or login with email -------
            </p>
            {/* Email and password */}
            <div className=" relative mx-28 mt-3">
              <h1 className=" font-semibold text-xl">E-mail</h1>
              <input
                type="text"
                className=" relative bg-white rounded-xl w-full h-16 shadow-md mt-5  px-5  "
                placeholder="Example111@gmail.com"
              />
            </div>
            <div className=" relative mx-28 mt-5">
              <h1 className=" font-semibold text-xl mt-2 ">Password</h1>
              <input
                type="text"
                className=" relative bg-white rounded-xl w-full h-16 shadow-md mt-5  px-5  "
                placeholder=" should contain alphabets numbers and characters"
              />

              <input type="checkbox" className=" mt-5" />
              <label htmlFor="" className=" mx-2">
                Remember me
              </label>
              <a
                href=""
                className=" text-blue-800 "
                style={{ margin: " 4rem" }}
              >
                Forgot password?
              </a>
              <div className="  flex items-center mt-5">
                <div className="  w-1/2 h-16 bg-black rounded-xl shadow-xl"> 
                <h1 className=" text-white mt-3 text-center font-medium text-2xl"> Log in</h1>
                </div>
                <div className=" bg-blue-400 w-2/5 h-16 rounded-xl ml-10">
                <h1 className=" text-white mt-3 text-center font-medium text-2xl"> Sign Up</h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center">
          </div>
        </div>
      </section>
    </div>
  );
}

export default login;
