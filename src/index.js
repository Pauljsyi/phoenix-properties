import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

import UserProvider from "./components/provider/UserProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#798777", //dark
      110: "#464F41", //darker green
      200: "#A2B29F",
      300: "#BDD2B6",
      400: "#F8EDE3",
      500: "#141E27", //dark gray
      600: "#203239", //lighter gray
      650: "#C3DBD9", // gray blue
      700: "#F5F2E7", // off-white
      710: "#EEC373", //light yellow
      720: "#CA965C", // deeper yellow
      730: "#CDB699", // light gold
      800: "#F9F9F9", // form white
      900: "#132C33", // bluish black
    },
  },
});

// render(
//   <ChakraProvider theme={theme}>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </ChakraProvider>,
//   document.getElementById('app')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <App />
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
