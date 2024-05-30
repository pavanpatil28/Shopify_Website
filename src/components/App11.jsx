import { Box, Text, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import body3 from "./Images/body3.png";

const App11 = () => {
  return (
    <Box pb={"4rem"} >
      <Box mt={"rem"} ml={"5.5rem"} mr={"5.5rem"} display={"flex"}>
        <Box mr={"3rem"}>
          <img src={body3} alt="" />
        </Box>
        <Box width={"47rem"} display={"flex"} flexDirection={"column"}>
          <Text mt={"9rem"} fontWeight={"500"}>
            FAST, RELIABLE CHECKOUT
          </Text>
          <Text fontWeight={"600"} fontSize={"2.2rem"}>
            The best-converting checkout on the planet
          </Text>
          <Text mt={"1rem"}>
            Back your business with Shop Pay—the one-click checkout that's built
            to convert.
          </Text>
          <Box overflow={"hidden"} role="group" w={"55%"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              mt={"4rem"}
              pb={"1rem"}
              width={"22.5rem"}
              position={"relative"}
              left={"-1.5rem"}
              _groupHover={{ left: 0 }}
              transition={"0.5s all"}
            >
              <Box position={"relative"}>
                <ArrowForwardIcon fontSize={"1.5rem"} />
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                w={"100%"}
              >
                <Box id="startselling">
                  <Link href="https://www.shopify.com/checkout" _hover={{textDecoration: "none"}}>Seize every sale</Link>
                </Box>
                <Box>
                  <ArrowForwardIcon fontSize={"1.5rem"} />
                </Box>
              </Box>
            </Box>
            <Box width={"100%"} borderBottom={"1px solid black"}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App11;
