import { useRouter } from "next/router";

import { useAccount } from "wagmi";

import React from "react";
const Header = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const router = useRouter();

  const launchAppHandler = () => {
    router.push("/connectHuddle");
  };
  return (
    <header className="bg-[#1E1e1e] h-screen bg-[url('/newbg.svg')] bg-center">
      <section className="w-[85%] mx-auto h-[95%] flex flex-col justify-between">
        <div className="w-[80%] mx-auto py-32 text-center mt-16">
          <h2 className="text-white  font-Grotesk text-5xl mb-6 tracking-wide leading-[50px]">
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#FD42FB] via-[#CD9ECD] to-[#753FF3] ">
              Trusted and Secured way to talk with Strangers
            </span>{" "}
            on the BlockChain!
          </h2>
          <p className="text-gray-400 w-[60%] mx-auto font-Grotesk">
            A decentralized application for pairing with random person
            anonymously! Talk. Connect. Have Fun.
          </p>

          <button
            onClick={launchAppHandler}
            className="py-3 w-[10rem] mt-8 border font-Grotesk font-semibold border-gray-200 rounded-full bg-gradient-to-r text-transparent bg-clip-text from-[#FD42FB] via-[#CD9ECD] to-[#753FF3] hover:scale-105 transition-all 0.1s ease-in-out "
          >
            Let's Connect
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
