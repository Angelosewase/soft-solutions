import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default WebLayout;
