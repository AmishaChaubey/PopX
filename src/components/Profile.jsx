import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-96 border p-6 rounded-lg shadow bg-white">
        <h3 className="text-lg font-medium mb-4">Account Settings</h3>
        <div className="flex items-center gap-4">
          <img
            src=""
            alt="Profile"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h4 className="font-semibold">Marry Doe</h4>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
