import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-96 border p-8 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Create your PopX account</h2>
        <form className="space-y-4">
          {["Full Name", "Phone number", "Email address", "Password", "Company name"].map((label, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-700">{label} *</label>
              <input
                type="text"
                placeholder={`Enter ${label.toLowerCase()}`}
                className="mt-1 w-full border px-3 py-2 rounded-md text-sm"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">Are you an Agency? *</label>
            <div className="flex items-center gap-4 mt-1">
              <label className="flex items-center gap-1">
                <input type="radio" name="agency" />
                Yes
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="agency" />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
