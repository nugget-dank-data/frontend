"use client";
import React from "react";
import "./globals.css";
import Sidepane from "@/components/Sidepane";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/compare";
  }, []);

  return <div className="flex"></div>;
}
