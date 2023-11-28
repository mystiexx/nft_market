import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const Login = () => {
  const [show, setShow] = useState(false);

  let initailValues = {
    password: "",
    email: "",
  };
  return (
    <Container
      maxW={"container.xl"}
      h="100vh"
      display="grid"
      placeItems={"center"}
    >
      <Box w={{ base: "full", md: "350px", lg: "350px" }}>
        <Text fontSize={25} fontWeight={900} mb="30px" color="text.white">
          Log In
        </Text>
        <Formik initialValues={initailValues}>
          {({ values, handleChange, dirty }) => (
            <Form>
              <Box display={"flex"} flexDir="column" gap="24px">
                <FormControl isRequired>
                  <FormLabel color={"gray.100"} fontSize={12}>
                    E-mail
                  </FormLabel>
                  <Input
                    type="text"
                    bg="#2D2D39"
                    border="none"
                    name="email"
                    color={"text.white"}
                    value={values.email}
                    onChange={handleChange}
                    outline="none"
                    placeholder="E-mail"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={"gray.100"} fontSize={12}>
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      type={show ? "text" : "password"}
                      bg="#2D2D39"
                      border="none"
                      color={"text.white"}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      outline="none"
                      placeholder="Password"
                    />
                    <InputRightElement>
                      {!show ? (
                        <IconButton
                          icon={<HiOutlineEye />}
                          bg="none"
                          _hover={{ bg: "none" }}
                          color="gray.100"
                          onClick={() => setShow(!show)}
                        />
                      ) : (
                        <IconButton
                          icon={<HiOutlineEyeOff />}
                          bg="none"
                          color="gray.100"
                          _hover={{ bg: "none" }}
                          onClick={() => setShow(!show)}
                        />
                      )}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  variant={"solid"}
                  type="submit"
                  isDisabled={!dirty}
                  w="full"
                  _hover={{
                    bg: "background.red",
                  }}
                >
                  Log in
                </Button>

                <Text
                  color="text.white"
                  textAlign={"center"}
                  fontWeight={"600"}
                >
                  Don't have an account?{" "}
                  <Link to="/sign_up" style={{ color: "#F72F46" }}>
                    Sign up
                  </Link>
                </Text>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
