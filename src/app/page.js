"use client";
import React from "react";
import "./globals.css";


import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/compare";
  }, []);

  return <div className="flex"></div>;
}
