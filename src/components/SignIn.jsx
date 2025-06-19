import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-96 border p-8 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Sign in to your PopX account</h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="mt-1 w-full border px-3 py-2 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full border px-3 py-2 rounded-md text-sm"
            />
          </div>
          <button type="submit" className="w-full bg-gray-300 text-gray-700 py-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
