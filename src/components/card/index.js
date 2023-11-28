import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export const NFTCard = ({ data }) => {
  return (
    <Box
      w={{ base: "300px", md: "300px", lg: "300px" }}
      bgColor="#393848"
      borderRadius={"5px"}
    >
      <Image
        src={data.image}
        objectFit="cover"
        w="100%"
        h="250px"
        borderTopRadius={"5px"}
      />
      <Box p="16px">
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
