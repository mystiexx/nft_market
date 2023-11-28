import React from "react";
import {
  Container,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
} from "@chakra-ui/react";
import { recover } from "assets";

const Recover = () => {
  return (
    <Container maxW="container.xl" py="200px">
      <Grid
        templateColumns={{
          base: "auto",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap="30px"
      >
        <GridItem>
          <Image src={recover} alt="recover" />
        </GridItem>

        <GridItem>
          <Text color="text.white" fontSize={30} fontWeight={900}>
            Cryptocurrency Account Recovery Assistance: Regain Access to Your
            Digital Assets with Confidence
          </Text>

          <Text color={"gray.100"} mt="15px">
            If you've lost access to your cryptocurrency account, our recovery
            service is here to help you regain control swiftly and securely.
            Whether it's a forgotten password, misplaced recovery phrase, or any
            other issue, our expert team specializes in guiding you through the
            account recovery process, ensuring the retrieval of your valuable
            digital assets. Trust us to assist you in re-establishing access to
            your crypto holdings, providing peace of mind in the fast-evolving
            world of digital finance.
          </Text>

          <Button
            mt="50px"
            _hover={{
              bg: "background.red",
            }}
          >
            Try it now
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Recover;
