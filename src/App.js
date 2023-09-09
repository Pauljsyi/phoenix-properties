import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Auth from "./components/auth/Auth";
import Home from "./components/home/Home";

const App = () => {
  return (
    <Box w={"100%"} h={"100%"}>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
