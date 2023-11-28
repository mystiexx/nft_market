import React from "react";
import { Box, Container } from "@chakra-ui/react";
// import axios from "axios";

const CryptoTable = () => {
  //   const [crypto, setCrypto] = useState([]);
  //   const [limit, setLimit] = useState(10);
  //   const [page, setPage] = useState(1);
  //   useEffect(() => {
  //     const getCryptoData = async () => {
  //       try {
  //         const request = await axios.get(
  //           `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=${page}&sparkline=false&locale=en`,
  //         );
  //         const { data } = request;
  //         console.log(data);
  //         setCrypto(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     getCryptoData();
  //   }, [limit, page]);
  return (
    <Box bg="#F1F1F1">
      <Container maxW="container.xl"></Container>
    </Box>
  );
};

export default CryptoTable;
