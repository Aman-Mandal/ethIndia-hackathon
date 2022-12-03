import { useRouter } from "next/router";
import React from "react";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  const router = useRouter();

  const getStartedHandler = () => {
    router.push("/about");
  };
  return (
    <header className="bg-[#1E1e1e] h-screen bg-[url('/newbg.svg')] bg-center">
      <section className="w-[85%] mx-auto h-[95%] flex flex-col justify-between">
        <div className="w-[80%] mx-auto py-32 text-center mt-16">
          <h2 className="text-white  font-Grotesk text-5xl mb-6 tracking-wide leading-[50px]">
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#FD42FB] via-[#CD9ECD] to-[#753FF3] ">
              The most intuitive way to Get Warranties
            </span>{" "}
            on the BlockChain!
          </h2>

          <p className="text-gray-400 w-[60%] mx-auto font-Grotesk">
            Now get your warranties on chain instead of keeping it inside the
            drawer and store it as an NFT. Start Issuing your warranties today!
          </p>

          <button
            onClick={getStartedHandler}
            className="py-3 px-8 mt-8 border font-Grotesk font-semibold border-gray-200 rounded-full bg-gradient-to-r text-transparent bg-clip-text from-[#FD42FB] via-[#CD9ECD] to-[#753FF3] hover:scale-105 transition-all 0.1s ease-in-out "
          >
            Get Started
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
