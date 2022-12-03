import Head from "next/head";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="bg-[#1e1e1e] h-screen">
      <Head>
        <title>Warranton.</title>
        <meta
          name="description"
          content="A decentralized way to issue warranty"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header />
      </main>
    </div>
  );
};

export default Home;
