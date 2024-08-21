import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-200 w-64 md:fixed top-16 md:top-16 md:bottom-16 p-4 hidden md:block z-40">
      <nav>
        <ul>
          <li>
            <div className="block py-2 px-4 text-gray-800 hover:bg-gray-300 rounded">
              Dashboard
            </div>
          </li>
          <li>
            <div className="block py-2 px-4 text-gray-800 hover:bg-gray-300 rounded">
              Reports
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
