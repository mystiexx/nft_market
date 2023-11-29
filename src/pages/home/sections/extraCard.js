import React from "react";
import { Box, Button, Container, Text, Image, Flex } from "@chakra-ui/react";
import warrior from "assets/warrior.jpg";
import { Link } from "react-router-dom";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

const ExtraCard = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  return (
    <Container maxW="container.xl">
      <Box
        position={"relative"}
        h={{ base: "570px", md: "322px", lg: "322px" }}
        bg="#282633"
        borderRadius={"10px"}
      >
        <Box
          position={"absolute"}
          right={{ base: null, md: 0, lg: 0 }}
          top={{ base: 250, md: 0, lg: 0 }}
        >
          <Box
            position={"absolute"}
            right={0}
            h="322px"
            w={{ base: "100%", md: "600px", lg: "600px" }}
            bgGradient={{
              base: "linear(to-t, rgba(40, 38, 51, 0.51) 0%,  #282633 100%)",
              md: "linear(to-l, rgba(40, 38, 51, 0.51) 0%,  #282633 100%)",
            }}
            zIndex={1}
          />
          <Image
            src={warrior}
            h="322px"
            borderRightRadius={{ base: "none", md: "10px", lg: "10px" }}
            borderBottomRadius={{ base: "10px", md: "none", lg: "none" }}
            w={{ base: "100%", md: "600px", lg: "600px" }}
            objectFit={"cover"}
          />
        </Box>
        <Box p="20px">
          <Text
            fontSize={{ base: "20px", md: 30, lg: 30 }}
            fontWeight={700}
            color={"text.white"}
            mb="20px"
            w={{ base: "full", md: "364px" }}
          >
            NFT Collection of Legendary Characters
          </Text>
          <Text color="gray.100" fontSize={"14px"}>
            Own a piece of our amazing exclusive NFT <br /> collection featuring
            iconic clan members
          </Text>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDir={{ base: "column", md: "row", lg: "row" }}
            alignItems={{ base: "none", md: "center", lg: "center" }}
            mt="40px"
            gap="30px"
          >
            <Flex gap="30px" alignItems={"center"}>
              <Box>
                <Text color="gray.100" fontSize={10}>
                  Status
                </Text>
                <Text color="text.white" fontWeight={700} fontSize={"18px"}>
                  Availabe for mint
                </Text>
              </Box>
              <Box>
                <Text color="gray.100" fontSize={10}>
                  Items
                </Text>
                <Text color="text.white" fontWeight={700} fontSize={"18px"}>
                  1,234
                </Text>
              </Box>
              <Box>
                <Text color="gray.100" fontSize={10}>
                  Price
                </Text>
                <Text color="text.white" fontWeight={700} fontSize={"18px"}>
                  550 Ever
                </Text>
              </Box>
            </Flex>

            <Link to="/explore">
              <Button
                variant={"solid"}
                position={"relative"}
                onClick={() => {
                  isConnected ? open({ view: "Account" }) : open();
                }}
                zIndex={5}
                _hover={{
                  bg: "background.red",
                }}
              >
                Discover
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ExtraCard;
