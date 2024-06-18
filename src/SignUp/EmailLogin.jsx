import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function EmailLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(true); // Toggle between sign-up and login
    const [message, setMessage] = useState(""); // Success or error message
    const navigate = useNavigate();
  
    const handleSignUp = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up successfully:", userCredential.user);
        
        // Optional: Store additional user information in Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: userCredential.user.email,
          createdAt: new Date(),
        });
        
        setMessage("Sign-up successful! Please login.");
        setIsSigningUp(false); // Switch to login form
        setEmail("");
        setPassword("");
      } catch (error) {
        console.error("Error during sign-up:", error);
        setMessage(`Error during sign-up: ${error.message}`);
      }
    };
  
    const handleLogin = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully:", userCredential.user);
        setMessage("Login successful! Redirecting to dashboard...");
        setTimeout(() => navigate("/dashboard"), 2000); // Redirect after 2 seconds
      } catch (error) {
        console.error("Error during login:", error);
        setMessage(`Error during login: ${error.message}`);
      }
    };
  
    return (
      <div className="flex lg:justify-center">
        <div className="relative lg:w-[765px] lg:h-[100px] w-[520px]">
          <div className="bg-green-700 lg:p-2 lg:w-[765px] relative lg:h-[100px] w-[500px] h-[100px]">
            <p className="text-white lg:p-0 text-xl lg:ml-2 p-2">Welcome back</p>
            <p className="lg:mt-2 mt-2 text-white text-lg lg:ml-2 ml-2">
              {isSigningUp ? "Sign up to Continue your Search" : "Sign in to Continue your Search"}
            </p>
          </div>
          <img
            src="./login.png"
            alt=""
            className="absolute lg:top-8 lg:left-[500px] lg:h-[230px] lg:w-[300px] h-[200px] w-[180px] left-[310px] top-10"
          />
          {message && (
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mt-4">
              <span className="block sm:inline">{message}</span>
            </div>
          )}
          <input
            type="email"
            className="absolute lg:top-[250px] lg:left-[16px] lg:w-96 w-96 rounded-md focus:outline-none focus:border-blue-500 text-black border border-black lg:p-3 lg:ml-36 top-[400px] left-[70px] p-3"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="absolute lg:top-[320px] lg:left-[16px] lg:w-96 w-96 rounded-md focus:outline-none focus:border-blue-500 text-black border border-black lg:p-3 lg:ml-36 top-[460px] left-[70px] p-3"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-green-800 lg:pl-20 lg:pr-20 lg:pt-2 lg:pb-2 absolute lg:top-[390px] lg:left-60 text-white border rounded-lg top-[520px] left-[140px] pl-20 pr-20 pt-1 pb-1 mt-3"
            onClick={isSigningUp ? handleSignUp : handleLogin}
          >
            {isSigningUp ? "Sign Up" : "Login"}
          </button>
          <div className="absolute lg:top-[460px] lg:left-60 top-[590px] left-[140px] mt-3">
            <button
              className="text-blue-500"
              onClick={() => {
                setIsSigningUp(!isSigningUp);
                setMessage(""); // Clear the message when switching forms
              }}
            >
              {isSigningUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </button>
          </div>
          <div id="recaptcha-container"></div>
        </div>
      </div>
    );
  }

export default EmailLogin
