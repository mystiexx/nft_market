import React, { useEffect, useState } from "react";
import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import { GoDiamond } from "react-icons/go";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import Avatar, { genConfig } from "react-nice-avatar";
import { motion } from "framer-motion";

const Navbar = () => {
  const [account, setAccount] = useState("");
  const routes = [
    {
      name: "explore",
      to: "/explore",
    },
    {
      name: "community",
      to: "/community",
    },
  ];

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.alert("Make sure you have Metamask!");
      } else {
        console.log("We have the ethereum Object", ethereum);
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setAccount(account);
      } else {
        console.log("No authorized account find");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const config = genConfig(account);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
    >
      <Box py="20px" bg="transparent">
        <Container maxW="container.xl">
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box display={"flex"} gap="50px" alignItems={"center"}>
              <Text color="text.white">Logo</Text>

              <Input
                placeholder="Search items"
                bg="#2D2D39"
                border="none"
                outline="none"
                w="271px"
                display={{ base: "none", md: "flex", lg: "flex" }}
              />

              <Box
                display={{ base: "none", md: "flex", lg: "flex" }}
                gap="50px"
                ml="50px"
              >
                {routes.map((route, idx) => (
                  <NavLink
                    key={idx}
                    to={route.to}
                    className={({ isActive }) =>
                      isActive ? styles.nav_active : styles.nav
                    }
                  >
                    {route.name}
                  </NavLink>
                ))}
              </Box>
            </Box>

            {account ? (
              <Avatar style={{ width: "3rem", height: "3rem" }} {...config} />
            ) : (
              <Button
                variant={"outline"}
                rightIcon={<GoDiamond />}
                onClick={connectWallet}
                _hover={{
                  bg: "gray.500",
                }}
              >
                Connect Wallet
              </Button>
            )}
          </Flex>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Navbar;
