import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  Avatar,
} from "@chakra-ui/react";
import Layout from "layout";
import { GoDiamond } from "react-icons/go";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { beast } from "assets";

const Profile = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <Layout>
      <Box>
        <Box>
          <Image
            src={beast}
            alt="beast"
            h="50vh"
            objectFit={"cover"}
            position={"absolute"}
            w="full"
            zIndex={-1}
            filter={"auto"}
            blur={"10px"}
          />
          <Box position={"relative"} h="50vh">
            <Container maxW="container.xl" py="150px">
              <Flex gap="24px" alignItems="center">
                <Avatar size="xl" />
                <Box>
                  <Text color="text.white" fontSize={20} fontWeight={700}>
                    John Doe
                  </Text>
                  <Text color={"gray.100"}>johndoe@mail.com</Text>
                </Box>
              </Flex>
            </Container>
          </Box>
        </Box>

        <Container maxW="container.xl" mt="70px">
          <Box position={"relative"}>
            <Flex
              justifyContent={"space-between"}
              alignItems={{ base: "none", md: "center", lg: "center" }}
              flexDir={{ base: "column", md: "row", lg: "row" }}
              gap="24px"
            >
              <Text fontSize="20px" fontWeight="700" color={"text.white"}>
                Your Collection
              </Text>

              {isConnected ? (
                <Text color="text.white">{address?.slice(0, 14)}...</Text>
              ) : (
                <Button
                  variant={"solid"}
                  onClick={() => open()}
                  w={{ base: "full", md: "auto", lg: "auto" }}
                  _hover={{
                    bg: "background.red",
                  }}
                  rightIcon={<GoDiamond />}
                >
                  Connect Wallet
                </Button>
              )}
            </Flex>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Profile;
