import React from "react";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

const Jumbo = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  return (
    <div>
      <Box className={styles.background} />
      <Box position={"relative"} zIndex={2}>
        <Container
          maxW="container.xl"
          h="80vh"
          display={"grid"}
          placeItems={"center"}
        >
          <Box>
            <Text
              fontSize={{ base: "30px", md: "60px", lg: "60px" }}
              color="text.white"
              fontWeight={900}
              textAlign={"center"}
              w={{ base: "full", md: "950px", lg: "950px" }}
            >
              <span style={{ color: "#F72F46" }}>Unlock</span> the world of
              crypto and discover awesome collectibles
            </Text>
            <Text
              color="gray.100"
              textAlign={"center"}
              fontSize={"20px"}
              fontWeight={500}
            >
              Buy, Sell, and Explore NFTs with Ease – Your Gateway to the
              Digital Economy
            </Text>

            <Box display={{ base: "block", md: "grid" }} placeItems={"center"}>
              <Flex
                mt="24px"
                alignItems={{ base: "none", md: "center", lg: "center" }}
                gap="24px"
                flexDir={{ base: "column", md: "row" }}
              >
                <Button
                  w={{ base: "full", md: "auto", lg: "auto" }}
                  onClick={() => {
                    isConnected ? open({ view: "Account" }) : open();
                  }}
                  _hover={{
                    bg: "background.red",
                  }}
                >
                  Explore Items
                </Button>

                <Button
                  variant={"outline"}
                  w={{ base: "full", md: "auto" }}
                  onClick={() => {
                    isConnected ? open({ view: "Account" }) : open();
                  }}
                  _hover={{
                    bg: "gray.500",
                  }}
                >
                  Start Guide
                </Button>
              </Flex>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Jumbo;
