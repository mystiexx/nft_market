import React from "react";
import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { buy_features } from "utils/enums";
import { binance, ethereum, polygon, solana } from "assets";

const CryptoTable = () => {
  return (
    <Box
      bg="#F1F1F1"
      my="100px"
      py={{ base: "100px", md: "20px", lg: "20px" }}
      h={{ base: "auto", md: "80vh", lg: "70vh" }}
      display={"grid"}
      placeItems={"center"}
    >
      <Container maxW="container.xl">
        <Text textAlign="center" fontSize="30px" fontWeight={900}>
          Buy/Sell Crypto
        </Text>
        <Text textAlign={"center"}>Seamless Crypto Transactions Made Easy</Text>

        <Box mt="50px">
          <Grid
            templateColumns={{
              base: "auto",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
            }}
            gap="50px"
            alignItems={"center"}
          >
            <GridItem>
              <Box display={"flex"} flexDir={"column"} gap="24px">
                {buy_features.map((data, idx) => (
                  <Box
                    display={"flex"}
                    flexDir={{ base: "column", md: "row", lg: "row" }}
                    alignItems={{ base: "none", md: "center", lg: "center" }}
                    gap="24px"
                  >
                    <Box
                      display={"grid"}
                      placeItems={"center"}
                      color="text.white"
                      w="40px"
                      h="40px"
                      bg="#454358"
                      borderRadius={"5px"}
                    >
                      {idx + 1}
                    </Box>
                    <Box>
                      <Text fontWeight={700} mb="2px">
                        {data.title}
                      </Text>
                      <Text>{data.description}</Text>
                    </Box>
                  </Box>
                ))}
              </Box>
            </GridItem>

            <GridItem>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap="24px"
              >
                <Box
                  bg="#F8F8F8"
                  borderRadius={"4px"}
                  p="5px"
                  display={"grid"}
                  placeItems={"center"}
                >
                  <Image
                    src={binance}
                    alt="binance"
                    h="50px"
                    objectFit={"cover"}
                    w={{ base: "150px", md: "150px", lg: "150px" }}
                  />
                </Box>
                <Box
                  bg="#F8F8F8"
                  borderRadius={"4px"}
                  display={"grid"}
                  placeItems={"center"}
                  p="5px"
                >
                  <Image
                    src={ethereum}
                    alt="binance"
                    h="50px"
                    objectFit={"cover"}
                    w="150px"
                  />
                </Box>
                <Box
                  bg="#F8F8F8"
                  borderRadius={"4px"}
                  display={"grid"}
                  placeItems={"center"}
                  p="5px"
                >
                  <Image
                    src={polygon}
                    alt="binance"
                    h="50px"
                    objectFit={"cover"}
                    w="150px"
                  />
                </Box>
                <Box
                  bg="#F8F8F8"
                  borderRadius={"4px"}
                  display={"grid"}
                  placeItems={"center"}
                  p="5px"
                >
                  <Image
                    src={solana}
                    alt="binance"
                    h="50px"
                    objectFit={"cover"}
                    w="150px"
                  />
                </Box>
              </Grid>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CryptoTable;
