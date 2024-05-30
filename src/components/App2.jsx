import { Box, Text, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import enterprise from "./Images/enterprise.png";
import developers from "./Images/developers.png";
import partners from "./Images/partners.png";
import plus from "./Images/plus.png";
import retail from "./Images/retail.png";

const App2 = () => {
  return (
    <Box
      
      pl={"5.5rem"}
      display={"flex"}
      flexDirection={"column"}
      gap={"2rem"}
      pb={"5rem"}
    >
      <Box>
        <Text textTransform={"uppercase"} fontWeight={"500"}>
          Explore the world’s Largest commerce community
        </Text>
      </Box>
      <Box>
        <Stack spacing={5} direction="row">
          <Box
            cursor={"pointer"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.7rem"}
            border={"1px solid rgb(220, 220, 220)"}
            backgroundColor={"white"}
            borderRadius={"0.5rem"}
            p={"1.5rem"}
            width={"15.8rem"}
            className="cards"
          >
            <img className="cardimg" src={enterprise} alt="enterprise" />
            <Text fontWeight={"500"} fontSize={"1.2rem"}>
              Enterprise
              <ArrowForwardIcon id="forwardicon" />
            </Text>
            <Text color={"rgb(90, 90, 90)"}>
              The modern, composable <br /> stack for enterprise retail
            </Text>
          </Box>
          <Box
            cursor={"pointer"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.7rem"}
            border={"1px solid rgb(220, 220, 220)"}
            backgroundColor={"white"}
            borderRadius={"0.5rem"}
            p={"1.5rem"}
            width={"15.8rem"}
            className="cards"
          >
            <img className="cardimg" src={plus} alt="enterprise" />

            <Text fontWeight={"500"} fontSize={"1.2rem"}>
              Plus
              <ArrowForwardIcon id="forwardicon" />
            </Text>
            <Text color={"rgb(90, 90, 90)"}>
              A commerce solution for <br /> growing digital brands
            </Text>
          </Box>
          <Box
            cursor={"pointer"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.7rem"}
            border={"1px solid rgb(220, 220, 220)"}
            backgroundColor={"white"}
            borderRadius={"0.5rem"}
            p={"1.5rem"}
            width={"15.8rem"}
            className="cards"
          >
            <img className="cardimg" src={partners} alt="enterprise" />

            <Text fontWeight={"500"} fontSize={"1.2rem"}>
              Partners
              <ArrowForwardIcon id="forwardicon" />
            </Text>
            <Text color={"rgb(90, 90, 90)"}>
              Offer your expertise to <br /> shopify merchants all over <br />{" "}
              the world
            </Text>
          </Box>
          <Box
            cursor={"pointer"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.7rem"}
            border={"1px solid rgb(220, 220, 220)"}
            backgroundColor={"white"}
            borderRadius={"0.5rem"}
            p={"1.5rem"}
            width={"15.8rem"}
            className="cards"
          >
            <img className="cardimg" src={developers} alt="enterprise" />

            <Text fontWeight={"500"} fontSize={"1.2rem"}>
              Developers
              <ArrowForwardIcon id="forwardicon" />
            </Text>
            <Text color={"rgb(90, 90, 90)"}>
              Build the future of <br /> commerce with Shopify's <br /> powerful
              API
            </Text>
          </Box>
          <Box
            cursor={"pointer"}
            display={"flex"}
            flexDirection={"column"}
            gap={"0.7rem"}
            border={"1px solid rgb(220, 220, 220)"}
            backgroundColor={"white"}
            borderRadius={"0.5rem"}
            p={"1.5rem"}
            width={"15.8rem"}
            className="cards"
          >
            <img className="cardimg" src={retail} alt="enterprise" />

            <Text fontWeight={"500"} fontSize={"1.2rem"}>
              Retail Stores
              <ArrowForwardIcon id="forwardicon" />
            </Text>
            <Text color={"rgb(90, 90, 90)"}>
              The complete system for <br /> selling in person
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default App2;
