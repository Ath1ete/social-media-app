import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">My Social Media App</h1>
      <nav>
        <a href="/dashboard" className="mr-4">
          Dashboard
        </a>
        <a href="/profile" className="mr-4">
          Profile
        </a>
        <a href="/logout">Logout</a>
      </nav>
    </header>
  );
};

export default Header;
