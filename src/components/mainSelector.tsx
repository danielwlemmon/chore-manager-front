import React, { useState } from "react";

export default function MainSelector() {
  const [activeSection, setActiveSection] = useState(0);

  const changeSelection = (selection: number) => {
    setActiveSection(selection);
  };

  return (
    <div className="max-w-2xl inline-flex flex-col w-full h-full justify-start">
      <div className="flex w-full justify-around h-16">
        <div
          className={`border-r flex flex-grow justify-center ${
            activeSection === 0 ? "bg-blue-300" : "hover:bg-green-200"
          }`}
        >
          <a
            className="flex w-full justify-center"
            onClick={() => changeSelection(0)}
          >
            <p className="font-medium text-lg self-center">Assign</p>
          </a>
        </div>
        <div
          className={`border-r  flex flex-grow justify-center ${
            activeSection === 1 ? "bg-blue-300" : "hover:bg-green-200"
          }`}
        >
          <a
            className="flex w-full justify-center"
            onClick={() => changeSelection(1)}
          >
            <p className="font-medium text-lg self-center">Edit Chores</p>
          </a>
        </div>
        <div
          className={`border-r flex flex-grow justify-center ${
            activeSection === 2 ? "bg-blue-300" : "hover:bg-green-200"
          }`}
        >
          <a
            className="flex w-full justify-center"
            onClick={() => changeSelection(2)}
          >
            <p className="font-medium text-lg self-center">Edit Kids</p>
          </a>
        </div>
      </div>
    </div>
  );
}
