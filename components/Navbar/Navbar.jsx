import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Link from "next/link";
import { TransactionContext } from "../../context/Context";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  // const [menuToggle, setMenuToggle] = useState(false);

  const { connected, connectWallet } = useContext(TransactionContext);

  const router = useRouter();

  const homepageHandler = () => {
    router.push("/");
  };

  return (
    <nav className=" text-white bg-[#1e1e1e] py-4 top-0 z-[20] fixed  w-full">
      <div className="flex justify-between w-[90%] mx-auto items-center">
        <h2
          onClick={homepageHandler}
          className="font-Grotesk font-semibold text-2xl cursor-pointer"
        >
          Cuddle.io
        </h2>

        <div className="flex gap-10 items-center">
          <ul className="flex gap-14 uppercase font-thin text-sm tracking-widest">
            <li className="hover:scale-105 hover:font-semibold cursor-pointer transition-all 0.1s ease-in-out">
              <Link href="/about">How It Works?</Link>
            </li>
            <li className="hover:scale-105 hover:font-semibold cursor-pointer transition-all 0.1s ease-in-out">
              <Link href="/docs">Docs</Link>
            </li>
            <li className="hover:scale-105 hover:font-semibold cursor-pointer transition-all 0.1s ease-in-out">
              <Link href="/release">Contact Us</Link>
            </li>
          </ul>
        </div>
        <ConnectButton />
      </div>
    </nav>
  );
};

export default Navbar;
