import React, { useState } from "react";
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import * as Yup from "yup";

const Register = () => {
  const [show, setShow] = useState(false);

  let initailValues = {
    first_name: "",
    last_name: "",
    password: "",
    email: "",
  };

  const Schema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Passsowrd is too short - should be 8 characters minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number"),
  });
  return (
    <Container
      maxW={"container.xl"}
      h="100vh"
      display="grid"
      placeItems={"center"}
    >
      <Box w={{ base: "full", md: "350px", lg: "350px" }}>
        <Text fontSize={25} fontWeight={900} mb="30px" color="text.white">
          Sign up
        </Text>
        <Formik initialValues={initailValues} validationSchema={Schema}>
          {({ values, handleChange, errors, touched, handleBlur, dirty }) => (
            <Form>
              <Box display={"flex"} flexDir="column" gap="24px">
                <FormControl isRequired>
                  <FormLabel color={"gray.100"} fontSize={12}>
                    First Name
                  </FormLabel>
                  <Input
                    type="text"
                    bg="#2D2D39"
                    color={"text.white"}
                    border="none"
                    value={values.first_name}
                    name="first_name"
                    onChange={handleChange}
                    outline="none"
                    placeholder="First Name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={"gray.100"} fontSize={12}>
                    Last Name
                  </FormLabel>
                  <Input
                    type="text"
                    bg="#2D2D39"
                    border="none"
                    color={"text.white"}
                    value={values.last_name}
                    name="last_name"
                    onChange={handleChange}
                    outline="none"
                    placeholder="Last Name"
                  />
                </FormControl>
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
                    value={values.last_name}
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
                      onBlur={handleBlur}
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
                  {errors.password && touched.password && (
                    <Text color="red" mb="5px" fontSize="12px" mt="5px">
                      {errors.password}
                    </Text>
                  )}
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
                  Sign Up
                </Button>

                <Text
                  color="text.white"
                  textAlign={"center"}
                  fontWeight={"600"}
                >
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: "#F72F46" }}>
                    Login
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

export default Register;
