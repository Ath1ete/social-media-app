import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4 h-screen">
      <ul>
        <li>
          <a href="/dashboard" className="block py-2">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/profile" className="block py-2">
            Profile
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
