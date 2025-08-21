"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navber";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Define paths where Navbar and Footer should be hidden
  const hideOnPaths = ["/dashboard", "/dashboard/add-product"];

  // Check if the current path starts with any of the paths in the array
  const shouldHide = hideOnPaths.some(path => pathname.startsWith(path));

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHide && <Navbar />}
      
      <main className="flex-grow">
        {children}
      </main>
      
      {!shouldHide && <Footer />}
    </div>
  );
}