import React, { useState } from "react";
import MainSelector from "./mainSelector";

export default function Main() {
  const [activeSection, setActiveSection] = useState(0);

  const changeSelection = (selection: number) => {
    setActiveSection(selection);
  };

  return (
    <div className="max-w-2xl inline-flex flex-col w-full h-full justify-start">
      <MainSelector />
    </div>
  );
}
