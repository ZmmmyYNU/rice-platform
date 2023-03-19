import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Block } from "./style";
import Footer from "../../components/Footer";
export default function Home() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/home") {
      navigate(`/home/idea`);
    }
  }, []);

  return (
    <>
      <Outlet />
      <Block />
      <Footer />
    </>
  );
}
