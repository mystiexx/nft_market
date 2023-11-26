import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import jumbo from "assets/jumbo.jpg";

export const NFTCard = ({ sliderRef }) => {
  return (
    <Box
      w={{ base: "300px", md: "300px", lg: "300px" }}
      bgColor="#393848"
      borderRadius={"5px"}
      ref={sliderRef}
    >
      <Image
        src={jumbo}
        objectFit="cover"
        w="100%"
        h="250px"
        borderTopRadius={"5px"}
      />
      <Box p="16px">
        <Text color="primary.white.700" fontWeight={600} fontSize={14}>
          NFT Name
        </Text>

        <Text
          color="gray.100"
          fontSize={12}
          mt="20px"
          textTransform={"uppercase"}
          fontWeight={500}
        >
          Current Price
        </Text>
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text color="text.white" fontWeight={700}>
            215 TON
          </Text>

          <Button
            variant={"outline"}
            _hover={{
              bg: "gray.500",
            }}
          >
            Mint
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
