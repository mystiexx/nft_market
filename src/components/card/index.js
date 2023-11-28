import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export const NFTCard = ({ data }) => {
  return (
    <Box
      w={{ base: "300px", md: "300px", lg: "300px" }}
      borderRadius={"5px"}
      position={"relative"}
      h="300px"
    >
      <Image
        src={data.image}
        objectFit="cover"
        w="100%"
        h="300px"
        borderRadius={"5px"}
        position={"absolute"}
      />
      <Box
        p="16px"
        position={"absolute"}
        bottom={0}
        bgColor="#3938480F"
        w="full"
        backdropFilter={"blur(10.7px)"}
      >
        <Text
          color="primary.white.700"
          fontWeight={600}
          fontSize={14}
          textTransform={"capitalize"}
        >
          {data.name}
        </Text>
      </Box>
    </Box>
  );
};
