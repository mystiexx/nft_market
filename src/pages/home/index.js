import React from "react";
import Layout from "layout";
import Jumbo from "./sections/jumbo";
import Marketplace from "./sections/marketplace";
import { Box } from "@chakra-ui/react";
import ExtraCard from "./sections/extraCard";
import Recover from "./sections/recover";

const Home = () => {
  return (
    <Layout>
      <Box pb="100px" display="flex" flexDir="column">
        <Jumbo />
        <ExtraCard />
        <Marketplace />
        <Recover />
      </Box>
    </Layout>
  );
};

export default Home;
