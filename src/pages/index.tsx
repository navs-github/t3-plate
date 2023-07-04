import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

import Header from "~/components/common/Header";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>T3 Plate</title>
        <meta name="description" content="t3 plate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main data-theme="retro" className="">
        <Header />
      </main>
    </>
  );
};

export default Home;
