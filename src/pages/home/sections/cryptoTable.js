import React, { useEffect } from "react";
import { Box, Container } from "@chakra-ui/react";
import axios from "axios";

const CryptoTable = () => {
  useEffect(() => {
    const getCryptoData = async () => {
      try {
        const request = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/latest",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "bc78955d-abaa-4359-8e86-00bfd0d98e79",
            },
          },
        );
        console.log(request);
      } catch (error) {
        console.log(error);
      }
    };

    getCryptoData();
  }, []);
  return (
    <Box>
      <Container></Container>
    </Box>
  );
};

export default CryptoTable;
