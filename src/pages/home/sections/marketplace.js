import React, { useRef } from "react";
import { Container, Box, Text, IconButton } from "@chakra-ui/react";
import { NFTCard } from "components/card";
import styles from "./styles.module.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { nfts } from "utils/enums";

const Marketplace = () => {
  const sliderRef = useRef(null);

  const handleSlider = (direction) => {
    const container = sliderRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= 100;
      } else if (direction === "right") {
        container.scrollLeft += 100;
      }
    }
  };
  return (
    <Box position={"relative"} mt="100px">
      <Container maxW="container.xl">
        <Text color="text.white" fontSize={30} fontWeight={700} mb="24px">
          Our Collections
        </Text>

        <div className={styles.card_wrapper} ref={sliderRef}>
          {nfts.map((data, idx) => (
            <NFTCard key={idx} data={data} />
          ))}
        </div>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt="24px"
        >
          <Box></Box>

          <Box display="flex" gap="10px" alignItems={"center"}>
            <IconButton
              variant={"outline"}
              onClick={() => handleSlider("left")}
              icon={<MdOutlineKeyboardArrowLeft size="20" />}
              _hover={{
                bg: "gray.500",
              }}
            />
            <IconButton
              variant={"outline"}
              onClick={() => handleSlider("right")}
              icon={<MdOutlineKeyboardArrowRight size="20" />}
              _hover={{
                bg: "gray.500",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Marketplace;
