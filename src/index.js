import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
import App8 from "./components/App8";
import App9 from "./components/App9";
import App10 from "./components/App10";
import App11 from "./components/App11";
import App12 from "./components/App12";
import App13 from "./components/App13";

ReactDOM.render(  
  <ChakraProvider>
    <App/>
    <App2/>
    <App3/>
    <App4/>
    <App5/>
    <App12/>
    <App13/>
    <App11/>
    <App10/>
    <App9/>  
    {/* very imp */}
    <App6/>
    <App7/>
    <App8/>
  </ChakraProvider>,
  document.getElementById("root")
);
