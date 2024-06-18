import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  const setUpRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth,"recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            handleSendOtp();
          },
        },
        auth
      );
    }
  };

  const handleSendOtp = () => {
    setUpRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        console.log("OTP sent");
      })
      .catch((error) => {
        console.error("Error during signInWithPhoneNumber", error);
      });
  };

  const handleVerifyOtp = () => {
    if (confirmationResult) {
      confirmationResult
        .confirm(otp)
        .then((result) => {
          console.log("User signed in successfully.");
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error("Error verifying OTP", error);
        });
    }
  };

  return (
    <div className="flex lg:justify-center">
      <div className="relative lg:w-[765px] lg:h-[100px] w-[520px]">
        <div className="bg-green-700 lg:p-2 lg:w-[765px] relative lg:h-[100px] w-[500px] h-[100px]">
          <p className="text-white lg:p-0 text-xl lg:ml-2 p-2">Welcome back</p>
          <p className="lg:mt-2 mt-2 text-white text-lg lg:ml-2 ml-2">
            Sign in to Continue your Search
          </p>
        </div>
        <img
          src="./login.png"
          alt=""
          className="absolute lg:top-8 lg:left-[500px] lg:h-[230px] lg:w-[300px] h-[200px] w-[180px] left-[310px] top-10"
        />
        <input
          type="text"
          className="absolute lg:top-[250px] lg:left-[16px] lg:w-96 w-1/2 rounded-md focus:outline-none focus:border-blue-500 text-black border border-black lg:p-3 lg:ml-36 top-[250px] left-[110px] p-3"
          placeholder="Enter Your Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          className="bg-green-800 lg:pl-20 lg:pr-20 lg:pt-2 lg:pb-2 absolute lg:top-[310px] lg:left-60 text-white border rounded-lg top-[310px] left-[170px] pl-10 pr-10 pt-1 pb-1 mt-3"
          onClick={handleSendOtp}
        >
          Send OTP
        </button>
        <input
          type="text"
          className="absolute lg:top-[380px] lg:left-[16px] lg:w-96 w-1/2 rounded-md focus:outline-none focus:border-blue-500 text-black border border-black lg:p-3 lg:ml-36 top-[380px] left-[110px] p-3"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          className="bg-green-800 lg:pl-20 lg:pr-20 lg:pt-2 lg:pb-2 absolute lg:top-[450px] lg:left-60 text-white border rounded-lg top-[450px] left-[170px] pl-10 pr-10 pt-1 pb-1"
          onClick={handleVerifyOtp}
        >
          Verify OTP
        </button>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}

export default SignUp;
