import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-96 border p-8 rounded-lg text-center shadow">
        <div className="w-10 h-10 bg-yellow-400 text-white rounded-full mx-auto flex items-center justify-center mb-8 font-bold">
          1
        </div>
        <h2 className="text-xl font-bold mb-2">Welcome to PopX</h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link to="/register">
          <button className="w-full bg-violet-600 text-white py-2 rounded-md mb-3 hover:bg-violet-700">
            Create Account
          </button>
        </Link>
        <Link to="/signin">
          <button className="w-full bg-violet-100 text-violet-800 py-2 rounded-md hover:bg-violet-200">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
