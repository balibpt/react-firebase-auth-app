import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signIn } = useUserAuth();

  const handleSignIn = async (e) => {
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto w-96 shadow-lg py-6 px-6 rounded-lg">
          {/* error alert message */}
          {error && (
            <div
              class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">{error}</span>
              </div>
            </div>
          )}
          {/* error alert message */}
          <label
            for="input-group-1"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@gmail.com"
            />
          </div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              #
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              type="button"
              onClick={handleSignIn}
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
          <div>
            <p>
              Dont have an Account?{" "}
              <span>
                <Link className="underline text-blue-600" to="/sign-up">
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
