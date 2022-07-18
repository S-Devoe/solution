import Head from "next/head";
import Image from "next/image";
import HomeContainer from "../components/HomeContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="main">
        
        <HomeContainer />
      </div>
    </>
  );
}
