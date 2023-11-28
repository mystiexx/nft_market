import React from "react";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Layout from "layout";
import { GoDiamond } from "react-icons/go";

const Profile = () => {
  return (
    <Layout>
      <Box>
        <Box bg="background.gray" h="50vh" w="full"></Box>

        <Container maxW="container.xl" mt="24px">
          <Box>
            <Flex
              justifyContent={"space-between"}
              alignItems={{ base: "none", md: "center", lg: "center" }}
              flexDir={{ base: "column", md: "row", lg: "row" }}
              gap="24px"
            >
              <Text fontSize="20px" fontWeight="700" color={"text.white"}>
                Your Collection
              </Text>

              <Button
                variant={"solid"}
                w={{ base: "full", md: "auto", lg: "auto" }}
                _hover={{
                  bg: "background.red",
                }}
                rightIcon={<GoDiamond />}
              >
                Connect Wallet
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Profile;
