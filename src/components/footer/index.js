import React from "react";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { logo } from "assets";

const Footer = () => {
  return (
    <Box py="30px" bg="#131216">
      <Container maxW="container.xl">
        <Flex alignItems={"center"} gap="10px">
          <Image src={logo} alt="logo" w="50px" h="50px" />
          <Text fontWeight={900} color="text.white" fontSize={20}>
            MintMoon
          </Text>
        </Flex>

        <Text textAlign={"center"} color="gray.100">
          Copyright © 2023 - MintMoon
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
