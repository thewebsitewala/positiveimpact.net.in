"use client";
import React, { useEffect, useState } from "react";

const CurrentYear = () => {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);
  return <>{year}</>;
};

export default CurrentYear;
