import React from "react";
import { Footer } from "../components/Footer/Footer";
import "./layout.css";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="layout__container">{children}</div>
      <Footer />
    </>
  );
};
