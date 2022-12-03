import { createContext, useState } from "react";
import { ethers } from "ethers";

export const TransactionContext = createContext();

const TransactionContextProvider = ({ children }) => {
  const [connected, setConnected] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        return alert("Please install Metamask!");
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const account = await signer.getAddress();

      setConnected(account);
    } catch (error) {
      console.error(error.message);
      throw new Error("No ethereum object found!");
    }
  };
  return (
    <TransactionContext.Provider value={{ connectWallet, connected }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
