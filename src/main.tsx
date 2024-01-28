import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/index.css";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

const customColors = {
  brand: {
    900: "#000",
    800: "#000",
    700: "#000",
  },
};

const customTheme = {
  colors: customColors,
  // Add other customizations as needed
};

const theme = extendTheme(customTheme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
