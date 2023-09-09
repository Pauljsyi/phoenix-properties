import React, { useContext } from "react";
import { Flex, Button, Text, useToast } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import ValidateInput from "../form/ValidateInput";
import { validateEmailAndPassword } from "../form/validateFormInput";
import { registerUser } from "../../realm/user";
import { UserContext } from "../provider/UserProvider";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/utils";

const RegisterEmail = ({ changePage, newUser }) => {
  const { authUser } = useContext(UserContext);
  let navigate = useNavigate();
  const toast = useToast();

  const showError = () =>
    toast({
      title: "An error occurred",
      description: "Email is already in use.",
      status: "error",
      position: "top",
      isClosable: true,
    });

  return (
    <Flex flexDir="column" p=".5rem 0" width="90%">
      <Text
        color="brand.300"
        fontSize="lg"
        letterSpacing=".1rem"
        fontWeight="500"
      >
        Sign Up
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validateEmailAndPassword}
        onSubmit={async (data, { resetForm }) => {
          try {
            const user = await registerUser(newUser, {
              email: data.email.toLowerCase(),
              password: data.password,
            });
            const metadata = {
              id: user.id,
              name: capitalizeFirstLetter(newUser.firstName),
            };
            authUser(metadata);
            resetForm();
            navigate("/home");
          } catch (error) {
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
            <Flex justifyContent="space-between" pt="1rem" pb=".5rem" mt="1rem">
              <Button
                rounded="15px"
                color="brand.700"
                variant="outline"
                fontWeight="400"
                width="40%"
                _hover={{
                  bg: "brand.300",
                  color: "brand.500",
                }}
                _focus={{
                  borderShadow: "none",
                }}
                isLoading={isSubmitting}
                isDisabled={isSubmitting}
                onClick={() => {
                  changePage(1);
                }}
              >
                Cancel
              </Button>
              <Button
                rounded="15px"
                fontWeight="400"
                variant="solid"
                bg="brand.200"
                width="40%"
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
                Sign Up
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default RegisterEmail;
