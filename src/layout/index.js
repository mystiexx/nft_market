import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "components/navbar";

const Layout = ({ children }) => {
  return (
    <Box display={"flex"} flexDir={"column"} flex="1">
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
