import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "../Header/Header.module.scss";

const Header = () => {
  return (
    <header>
      <Navbar />

      <div className="flex flex-col items-center justify-center pt-20 h-full w-[80%] mx-auto">
        <h2 className="text-6xl font-Grotesk text-center font-extrabold py-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700 leading-[3.5rem] via-gray-400  md:tracking-wide">
          Trusted and Secured way <br /> to talk with Strangers
        </h2>
        <p className="text-center font-Grotesk text-lg text-gray-400/60 pb-6">
          A decentralized application for pairing with random person
          anonymously!
        </p>

        <button className=" w-[15rem] text-xl font-Grotesk font-semibold mx-auto bg-gray-700/40 border border-gray-200 my-10 text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-600">
          Launch App
        </button>
      </div>
    </header>
  );
};

export default Header;
