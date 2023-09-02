import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "../context";
const SiteTheme = () => {
  console.log("dasedw");
  const { isDarkTheme, setIsDarkTheme } = useGlobalContext();
  console.log(isDarkTheme);
  return (
    <div className="theme-toggle">
      <button
        onClick={() => {
          setIsDarkTheme(!isDarkTheme);
          document.querySelector("body").classList.toggle("white-theme");
        }}
      >
        {isDarkTheme ? (
          <BsFillSunFill className="sun"></BsFillSunFill>
        ) : (
          <BsFillMoonFill></BsFillMoonFill>
        )}
      </button>
    </div>
  );
};

export default SiteTheme;
