import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box py="30px" bg="#131216">
      <Container maxW="container.xl">
        <Text fontWeight={900} color="text.white">
          Logo
        </Text>

        <Text textAlign={"center"} color="gray.100">
          Copyright © 2023
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
