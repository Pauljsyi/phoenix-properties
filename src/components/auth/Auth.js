import React, { useState } from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import geometry from "../../assets/geometric.jpg";
import Login from "./Login";
import RegisterName from "./RegisterName";
import RegisterEmail from "./RegisterEmail";

/**
 * Defaults to the login page
 * Navigates to sign up page if user selects the sign up button
 */
const Auth = () => {
  const [page, setPage] = useState(1);
  const [newUser, setNewUser] = useState();

  const changePage = (num) => {
    console.log("num", num);
    setPage(num);
  };

  const updateNewUser = (user) => {
    console.log("updating new user", user);
    setNewUser(user);
  };

  console.log("newUser", newUser);

  return (
    <Box
      h="100vh"
      w="100vw"
      bgImage={`url(${geometry})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Center>
        <Flex mt="20vh" w="min(33%, 400px)" flexDir="column" textAlign="center">
          <Heading color="brand.400" letterSpacing=".1rem">
            Phoenix Properties
          </Heading>
          <Flex
            bg="brand.500"
            rounded="10px"
            width="100%"
            p="1.5rem"
            flexDir="column"
            alignItems="center"
            mt="2rem"
            opacity=".9"
          >
            {page === 1 ? (
              <Login changePage={changePage} />
            ) : page === 2 ? (
              <RegisterName
                changePage={changePage}
                updateNewUser={updateNewUser}
              />
            ) : (
              <RegisterEmail changePage={changePage} newUser={newUser} />
            )}
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default Auth;
