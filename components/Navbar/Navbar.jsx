import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="w-full bg-inherit">
      <div className="flex items-center font-Grotesk justify-between w-[90%] mx-auto py-4 border-b-2 border-gray-700">
        <h1 className="text-3xl text-white font-semibold">Cuddle.io</h1>
        <ul className="hidden md:flex text-lg space-x-10 text-white font-semibold items-center">
          <li>Home</li>
          <li>About</li>
          <li>Docs</li>
          <li className="bg-black/40  border border-gray-500 cursor-pointer hover:bg-black/10 py-2 px-6 rounded-xl">
            Get Started
          </li>
        </ul>
        <div className="md:hidden text-xl">
          {menuToggle ? (
            <GrClose onClick={() => setMenuToggle(false)} />
          ) : (
            <FaBars onClick={() => setMenuToggle(true)} />
          )}

          {menuToggle && (
            <ul className=" bg-white h-screen space-y-6 z-10 -right-2 fixed top-0 w-[70vw] flex flex-col items-end text-2xl pr-8 py-10 shadow-xl rounded-md">
              <li className="py-2">
                <GrClose onClick={() => setMenuToggle(false)} />
              </li>
              <li>Home</li>
              <li>About</li>
              <li>Docs</li>
              <li className="bg-[#1F2937] py-2 px-6 text-white rounded-2xl">
                Get Started!
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
