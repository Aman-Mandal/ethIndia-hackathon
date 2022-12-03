import Head from "next/head";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Home = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <div className="bg-[#1e1e1e] h-screen">
        <Head>
          <title>Cuddle.io</title>
          <meta
            name="description"
            content="A decentralized way to issue warranty"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          {/* <ConnectButton /> */}
          <Navbar />
          <Header />
        </main>
      </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Home;
