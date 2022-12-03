import React from "react";
import { HuddleIframe } from "@huddle01/huddle01-iframe";

const index = () => {
  const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/xyz",
    height: "600px",
    width: "1200px",
    noBorder: true, // false by default
  };
  return (
    <div className="bg-[#1e1e1e] h-screen">
      <div className="mx-auto w-fit py-10">
        <HuddleIframe config={iframeConfig} />
      </div>
    </div>
  );
};

export default index;
