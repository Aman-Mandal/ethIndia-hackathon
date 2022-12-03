import { useRouter } from "next/router";

import { useAccount, useSigner } from "wagmi";
import { useContract } from 'wagmi'
import { ABI } from "./../utils/abi"
import { ethers } from "ethers";

import React, { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext();
const { ethereum } = window

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionsContract = new ethers.Contract(
    '0x874782792DD1c43Dbd7F488391BFDF0E9C9653fD',
    ABI,
    signer
  )

  return transactionsContract
}
  

const TransactionContextProvider = ({ children }) => {
   const transactionContract = getEthereumContract()

  const router = useRouter();

  const getRoomId = async () => {
    const tx = await transactionContract.getRoomId()
    await tx.wait()
  }

  let roomId;
  const addMember = async () => {
    try {
      roomId = getRoomId();
      const tx = await transactionContract.addMember()
      await tx.wait()
      router.push(`/connectHuddle`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TransactionContext.Provider value={{ roomId, addMember }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
