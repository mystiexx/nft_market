import React from "react";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Jumbo = () => {
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
              fontSize={{ base: "30px", md: "70px", lg: "70px" }}
              color="text.white"
              fontWeight={900}
              textAlign={"center"}
            >
              <span style={{ color: "#F72F46" }}>Discover</span> awesome
              collectibles
            </Text>
            <Text
              color="gray.100"
              textAlign={"center"}
              fontSize={"16px"}
              fontWeight={500}
            >
              Buy unique collectibles NFTs in our marketplace
            </Text>

            <Box display={{ base: "block", md: "grid" }} placeItems={"center"}>
              <Flex
                mt="24px"
                alignItems={"center"}
                gap="24px"
                flexDir={{ base: "column", md: "row" }}
              >
                <Link to="/explore">
                  <Button
                    variant={"solid"}
                    w={{ base: "full", md: "auto" }}
                    _hover={{
                      bg: "background.red",
                    }}
                  >
                    Explore Items
                  </Button>
                </Link>

                <Button
                  variant={"outline"}
                  w={{ base: "full", md: "auto" }}
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
