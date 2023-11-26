import React from "react";
import Layout from "layout";
import Jumbo from "./sections/jumbo";
import Marketplace from "./sections/marketplace";
import { Box } from "@chakra-ui/react";
import ExtraCard from "./sections/extraCard";

const Home = () => {
  return (
    <Layout>
      <Box pb="100px" display="flex" flexDir="column">
        <Jumbo />
        <ExtraCard />
        <Marketplace />
      </Box>
    </Layout>
  );
};

export default Home;
