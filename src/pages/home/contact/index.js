import React from "react";
import {
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  Input,
  Center,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";

const Contact = () => {
  let initialValues = {
    name: "",
    email: "",
    message: "",
  };
  return (
    <Container maxW="container.xl">
      <Box py="100px">
        <Text
          textAlign={"center"}
          fontWeight={900}
          color={"text.white"}
          fontSize={30}
        >
          Contact Us
        </Text>
        <Center>
          <Text
            color={"gray.100"}
            textAlign={"center"}
            w={{ base: "full", md: "500px", lg: "500px" }}
          >
            Got a specific inquiry or need assistance with wallet recovery? Fill
            out the form below, and our team will get back to you shortly.
          </Text>
        </Center>

        <Box display={"grid"} placeItems={"center"} mt="50px">
          <Box w={{ base: "full", md: "350px", lg: "350px" }}>
            <Formik initialValues={initialValues}>
              {({ values, handleChange, dirty }) => (
                <Form>
                  <Box display={"flex"} flexDir="column" gap="24px">
                    <FormControl isRequired>
                      <FormLabel color={"gray.100"} fontSize={12}>
                        Full Name
                      </FormLabel>
                      <Input
                        type="text"
                        bg="#2D2D39"
                        border="none"
                        name="name"
                        color={"text.white"}
                        value={values.name}
                        onChange={handleChange}
                        outline="none"
                        placeholder="Full Name"
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
                        value={values.email}
                        onChange={handleChange}
                        outline="none"
                        placeholder="E-mail"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color={"gray.100"} fontSize={12}>
                        Message
                      </FormLabel>
                      <Textarea
                        type="text"
                        bg="#2D2D39"
                        border="none"
                        name="message"
                        color={"text.white"}
                        value={values.message}
                        onChange={handleChange}
                        outline="none"
                        placeholder="Enter Message"
                      />
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
                      Send
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
