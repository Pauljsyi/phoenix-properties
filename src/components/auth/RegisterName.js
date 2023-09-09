import React from "react";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { Formik, Form } from "formik";
import ValidateInput from "../form/ValidateInput";
import { validateFirstAndLastName } from "../form/validateFormInput";

const RegisterName = ({ changePage, updateNewUser }) => {
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
        initialValues={{ firstName: "", lastName: "" }}
        validationSchema={validateFirstAndLastName}
        onSubmit={async (data, { resetForm }) => {
          console.log("test submit", data);
          updateNewUser({
            firstName: data.firstName.toLowerCase(),
            lastName: data.lastName.toLowerCase(),
          });
          resetForm();
          changePage(3);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <ValidateInput
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              variant="flushed"
              color="brand.700"
              fontSize={"md"}
            />
            <ValidateInput
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              variant="flushed"
              color="brand.700"
              fontSize={"md"}
            />
            <Flex justifyContent="center" p=".75rem" mt="1rem">
              <IconButton
                variant="outline"
                color="brand.700"
                rounded="20px"
                icon={<FiArrowRight />}
                _hover={{
                  bg: "brand.300",
                  color: "brand.500",
                }}
                type="submit"
                isLoading={isSubmitting}
                isDisabled={isSubmitting}
              ></IconButton>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default RegisterName;
