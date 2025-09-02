import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <div className="bg-white">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default UserLayout;