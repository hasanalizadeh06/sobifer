import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
interface UserLayoutProps {
  children: ReactNode;
}

const HIDDEN_LAYOUT_PATHS = ["/login", "/register", "/forgot-password"];

const UserLayout = ({ children }: UserLayoutProps) => {
  const pathname = usePathname();
  const hideLayout = HIDDEN_LAYOUT_PATHS.includes(pathname);

  return (
    <div className="bg-white">
      {!hideLayout && <Navbar />}
      <div>{children}</div>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default UserLayout;