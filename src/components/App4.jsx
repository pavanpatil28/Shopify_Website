import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import img1 from "./Images/img1.png";
import img2 from "./Images/img2.png";
import img3 from "./Images/img3.png";

const App4 = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      pt={"5rem"}
      pl={"5.5rem"}
      pb={"3.5rem"}
    >
      <Box display={"flex"} mb={"4rem"}>
        <Box display={"flex"} flexDirection={"column"} width={"56rem"}>
          <Text mt={"2rem"} textTransform={"uppercase"} fontWeight={"500"}>
            sales channels
          </Text>
          <Text fontWeight={"600"} fontSize={"3rem"}>
            Sell to every buyer, everywhere
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} width={"28rem"}>
          <Text>
            Sell online, in person, and around the world with the marketing
            tools, social integrations, and sales channels you need to get your
            products in front of customers.
          </Text>

          <Box overflow={"hidden"} role="group" w={"75%"}>
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
                  <Link href="https://www.shopify.com/sell" _hover={{textDecoration: "none"}}>Start Selling</Link>
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
      <Box display={"flex"} gap={"1.5rem"}>
        <Box width={"27rem"}>
          <img src={img1} alt="" />
        </Box>
        <Box width={"27rem"}>
          <img src={img2} alt="" />
        </Box>
        <Box width={"27rem"}>
          <img src={img3} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default App4;
