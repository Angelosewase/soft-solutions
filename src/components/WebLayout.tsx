import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default WebLayout;
