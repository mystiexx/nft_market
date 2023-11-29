import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "components/navbar";
import Footer from "components/footer";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
