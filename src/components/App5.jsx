import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import img4 from "./Images/img4.png";

const App5 = () => {
  return (
    <Box display={"flex"} ml={"5.5rem"} mb={"4rem"} mt={"2.2rem"}>
      <Box display={"flex"} flexDirection={"column"} width={"25rem"}>
        <Text mt={"8rem"} textTransform={"uppercase"} fontWeight={"700"}>
          Point of sale
        </Text>
        <Text fontWeight={"600"} fontSize={"2.3rem"}>
          Flexible point of sale to power your retail store
        </Text>
        <Text mt={"1rem"} fontSize={"1.1rem"}>
          A POS system that allows customers to shop their way, from online to
          checkout line.
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
              w={"84%"}
            >
              <Box id="startselling">
                <Link href="https://www.shopify.com/pos" _hover={{textDecoration: "none"}}>Meet Shopify POS</Link>
              </Box>
              <Box>
                <ArrowForwardIcon fontSize={"1.5rem"} />
              </Box>
            </Box>
          </Box>
          <Box width={"100%"} borderBottom={"1px solid black"}></Box>
        </Box>
      </Box>
      <Box width={"40rem"} ml={"19rem"} mt={"1rem"} mb={"1rem"}>
        <img src={img4} alt="" />
      </Box>
    </Box>
  );
};

export default App5;
