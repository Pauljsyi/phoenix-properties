import React, { useContext } from "react";
import { Flex, Text, Button, useToast } from "@chakra-ui/react";
import { authenticateUser } from "../../realm/user";
import { Formik, Form } from "formik";
import ValidateInput from "../form/ValidateInput";
import { validateEmailAndPassword } from "../form/validateFormInput";
import { UserContext } from "../provider/UserProvider";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/utils";

const Login = ({ changePage }) => {
  const { authUser } = useContext(UserContext);
  let navigate = useNavigate();
  const toast = useToast();

  const showError = () =>
    toast({
      title: "An error occurred",
      description: "Invalid credentials",
      status: "error",
      position: "top",
      isClosable: true,
    });

  return (
    <>
      <Flex
        p=".5rem .9rem"
        opacity="1"
        flexDir="column"
        rounded="10px"
        width="100%"
        textAlign="center"
      >
        <Text
          color="brand.300"
          fontSize="lg"
          letterSpacing=".1rem"
          fontWeight="500"
        >
          Login
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validateEmailAndPassword}
          onSubmit={async (data, { resetForm }) => {
            try {
              const user = await authenticateUser(
                data.email.toLowerCase(),
                data.password
              );

              console.log("auth data: ", data);
              const metadata = {
                id: user._id,
                name: capitalizeFirstLetter(user.firstName),
              };
              authUser(metadata);
              resetForm();
              navigate("home");
              if (!user) {
                showError();
              }
            } catch (error) {
              console.log("login catch errorrrrr: ", error);
              showError();
            }
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <ValidateInput
                placeholder="Email"
                name="email"
                value={values.email}
                fontSize={"md"}
                variant="flushed"
                color="brand.700"
              />
              <ValidateInput
                placeholder="Password"
                name="password"
                value={values.password}
                fontSize={"md"}
                variant="flushed"
                color="brand.700"
              />
              <Flex justifyContent="right" pt=".5rem">
                <Text
                  color="brand.100"
                  fontSize="sm"
                  cursor="pointer"
                  _hover={{
                    color: "brand.300",
                  }}
                >
                  Forgot Password
                </Text>
              </Flex>
              <Flex
                w="100%"
                justifyContent="space-between"
                mt="1.2rem"
                mb=".5rem"
              >
                <Button
                  rounded="15px"
                  width="40%"
                  variant="outline"
                  color="brand.400"
                  fontWeight="400"
                  transition="0.3s ease-in"
                  _hover={{
                    bg: "brand.300",
                    color: "brand.500",
                  }}
                  _focus={{
                    borderShadow: "none",
                  }}
                  onClick={() => changePage(2)}
                  isLoading={isSubmitting}
                  isDisabled={isSubmitting}
                >
                  Sign Up
                </Button>
                <Button
                  rounded="15px"
                  fontWeight="400"
                  width="40%"
                  variant="solid"
                  bg="brand.200"
                  _hover={{
                    bg: "brand.300",
                  }}
                  _focus={{
                    borderShadow: "none",
                  }}
                  type="submit"
                  isLoading={isSubmitting}
                  isDisabled={isSubmitting}
                >
                  Login
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default Login;
