import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-full rounded-md relative p-8 border-2  ${
        darkMode ? "bg-gray-900 border-gray-800" : "border-neutral-200 bg-white"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
