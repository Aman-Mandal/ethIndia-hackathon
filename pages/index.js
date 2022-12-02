import Head from "next/head";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="bg-[#1e1e1e] h-screen">
      <Head>
        <title>Cuddle!</title>
        <meta
          name="description"
          content="An application to connect with Strangers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
}
