import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import { logo } from "assets";

const Navbar = () => {
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
              <Flex alignItems={"center"} gap="10px">
                <Image src={logo} alt="logo" w="50px" h="50px" />
                <Text color="text.white" fontWeight={900}>
                  MintMoon
                </Text>
              </Flex>

              <InputGroup ml="50px">
                <InputLeftElement>
                  <IconButton
                    icon={<IoSearchOutline />}
                    display={{ base: "none", md: "flex", lg: "flex" }}
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                  />
                </InputLeftElement>
                <Input
                  placeholder="Search items"
                  bg="#2D2D39"
                  border="none"
                  color="text.white"
                  outline="none"
                  w="271px"
                  display={{ base: "none", md: "flex", lg: "flex" }}
                  _placeholder={{
                    color: "gray.100",
                  }}
                />
              </InputGroup>

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

            <Box display={{ base: "none", md: "flex", lg: "flex" }} gap="20px">
              <Link to="login">
                <Button
                  _hover={{
                    bg: "background.red",
                  }}
                >
                  Log in
                </Button>
              </Link>

              <Link to="/sign_up">
                <Button
                  variant={"outline"}
                  _hover={{
                    bg: "gray.500",
                  }}
                >
                  Sign up
                </Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Navbar;
