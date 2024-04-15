import React from "react";

function SignUp() {
  return (
    <div className="flex lg:justify-center">
      <div className="relative lg:w-[765px] lg:h-[100px] w-[520px]">
        <div className="bg-green-700 lg:p-2 lg:w-[765px] relative lg:h-[100px] w-[500px] h-[100px] ">
          <p className="text-white lg:p-0 text-xl lg:ml-2 p-2">Welcome back</p>
          <p className="lg:mt-2 mt-2 text-white text-lg lg:ml-2 ml-2">Sign in to Continue your Search</p>
        </div>
        <img
          src="login.png"
          alt=""
          className="absolute lg:top-8 lg:left-[500px] lg:h-[230px] lg:w-[300px] h-[200px] w-[180px] left-[310px] top-10"
        />
        <input
          type="text"
          className="absolute lg:top-[250px] lg:left-[16px] lg:w-96 rounded-md focus:outline-none focus:border-blue-500 text-black border border-black lg:p-3 lg:ml-36 top-[250px] left-[130px] p-3"
          placeholder="Enter Your Phone Number"
        />
        <input
          type="text"
          className="absolute lg:top-[320px] lg:left-[16px] lg:w-96 rounded-md focus:outline-none focus:border-blue-500 text-black border border-black lg:p-3 lg:ml-36 top-[330px] left-[130px] p-3"
          placeholder="Enter Otp"
        />
        <button className="bg-green-800 lg:pl-20 lg:pr-20 lg:pt-2 lg:pb-2 absolute lg:top-[400px] lg:left-64 text-white border rounded-lg top-[420px] left-[170px] pl-10 pr-10 pt-1 pb-1">
          Login
        </button>
      </div>
    </div>
  );
}

export default SignUp;
