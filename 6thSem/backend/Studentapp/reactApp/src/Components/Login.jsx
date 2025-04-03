import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const navigate=useNavigate()

  async function register(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const res = await response.json();

      if (response.ok) {
        alert(res.msg);  
      } else {
        alert(`Error: ${res.msg}`);  
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  }

  async function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Basic form validation
    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const res = await response.json();

      if (response.ok) {
        navigate('/dashBoard');
        alert(res.msg);  // Success message from server
      } else {
        alert(`Error: ${res.msg}`);  // Error message from server
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={state === "Sign Up" ? register : login}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name:</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border border-zinc-300 rounded w-full p-2 mt-1"
            />
          </div>
        )}

        <div className="w-full">
          <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border border-zinc-300 rounded w-full p-2 mt-1"
          />
        </div>

        <div className="w-full">
          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="border border-zinc-300 rounded w-full p-2 mt-1"
          />
        </div>

        <button type="submit" className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <span onClick={() => setState("Login")} className="text-primary underline cursor-pointer">
              Login
            </span>
          </p>
        ) : (
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <span onClick={() => setState("Sign Up")} className="text-primary underline cursor-pointer">
              Sign Up
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;