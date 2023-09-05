import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { loadWeb3Data } from "../src/web3/funcs";
import { useProvider } from "../src/context";

// Components
import { VStack, Box, Spacer } from "@chakra-ui/react";
import { NavBar } from "../src/components/navBar";
import { ShowDapp } from "../src/subPages/showDapp";
import { TheDivider } from "../src/components/theDivider";
import { InfoSaver } from "../src/subPages/infoSaver";
import { InfoStableCoin } from "../src/subPages/infoStableCoin";
import { InfoSaverUSDC } from "../src/subPages/infoSaverUSDC";
import { RoadMap } from "../src/subPages/roadMap";
import { Footer } from "../src/subPages/footer";
import { Loading } from "../src/components/dapp-v2/loading";

const Home = () => {
  // Context
  const {
    setSaverCirculation,
    setSaverHolders,
    setStableCoinDistributed,
    setLastStableCoinDistribute,
    setSaverPrice,
    setSaverMinted,
  } = useProvider();

  const router = useRouter();
  // React useEffect
  React.useEffect(() => {
    router.push('/dapp');
  }, []);

  return (
    <>
      <Head>
        <title>Saver Community</title>
        <meta
          name="description"
          content="Aplicacion oficial de Saver Community."
        />
        <meta name="image" content="https://i.ibb.co/z7hxTvw/SAVER-TOKEN.png" />
      </Head>
      <VStack minH="800px">
        <Spacer />
        <Loading />
        <Spacer />
      </VStack>
    </>
  );
};

export default Home;
