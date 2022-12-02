import Head from "next/head";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
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
