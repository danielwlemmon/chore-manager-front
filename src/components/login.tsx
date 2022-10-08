import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/main");
  };

  return (
    <div className="max-w-2xl flex flex-col w-full h-full justify-start mt-20">
      <div className="rounded-md flex-col flex border-2 border-black h-1/4 mx-4 mb-10">
        <form onSubmit={handleSubmit} className="h-full flex-col">
          <div className="flex flex-col h-full justify-around">
            <div className="flex ml-8 ">
              <label>
                Username:
                <input
                  className="ml-2 rounded-md border-2 border-gray-800"
                  type="text"
                  name="username"
                />
              </label>
            </div>
            <div className="flex ml-8">
              <label>
                Password:
                <input
                  className="ml-2 rounded-md border-2 border-gray-800"
                  type="text"
                  name="password"
                />
              </label>
            </div>
            <div className="max-w-sm h-10 text-gray-900 hover:text-gray-300 rounded-md hover:bg-gray-800 text-xl bg-gray-300 self-center flex border justify-center w-1/2 ">
              <input
                className="flex w-full justify-center"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="justify-center flex mx-4">
        <div className="max-w-sm h-10 text-gray-900 hover:text-gray-300 rounded-md hover:bg-gray-800 bg-gray-300 text-xl justify-center flex w-1/2">
          <a className="flex w-full justify-center" href="/signup">
            <p className="self-center">Sign Up</p>
          </a>
        </div>
      </div>
    </div>
  );
}
