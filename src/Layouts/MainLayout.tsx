import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto ml-0 mt-20 md:ml-64">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
