import { Box, Text, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import hash from "./Images/graph.png";
import attherate from "./Images/cube.png";
import bars from "./Images/home.png";
import body2 from "./Images/body2.png";

const App11 = () => {
  return (
    <Box pt={"4rem"}>
      <Box
        ml={"5.5rem"}
        mr={"5.5rem"}
        display={"flex"}
        flexDirection={"column"}
        pb={"4rem"}
      >
        <Text fontWeight={"500"}>CENTRALIZED BUSINESS OPERATIONS</Text>
        <Box mt={"2rem"} display={"flex"}>
            <Box>
                <Text fontSize={"3rem"} fontWeight={"600"} width={"40rem"}>
                    Streamline your back office
                </Text>
            </Box>
          <Box ml={"20.5rem"}>
            <Box overflow={"hidden"} role="group" w={"83.5%"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                mt={"1rem"}
                pb={"1rem"}
                width={"28rem"}
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
                    <Link
                      href="https://www.shopify.com/pos"
                      _hover={{ textDecoration: "none" }}
                    >
                      Manage your business
                    </Link>
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
        <Box display={"flex"}>
          <Box width={"40rem"} mt={"7rem"}>
            <img src={body2} alt="" />
          </Box>
          <Box>
            <Box ml={"4rem"} display={"flex"}>
              <Box mt={"5rem"} mr={"2rem"}>
                <img src={hash} width={"45rem"} alt="" />
              </Box>
              <Box
                mt={"5rem"}
                display={"flex"}
                flexDirection={"column"}
                width={"30rem"}
                borderBottom={"1px solid black"}
              >
                <Text fontWeight={"600"} fontSize={"1.5rem"}>
                  Oversee your operations
                </Text>
                <Text mt={"2rem"} mb={"3rem"}>
                  Manage inventory, track payments, and view real-time business
                  insights - all in one place, so you can focus on building your
                  business.
                </Text>
              </Box>
            </Box>
            <Box display={"flex"}>
              <Box ml={"4rem"} mt={"4rem"} mr={"2rem"}>
                <img src={attherate} width={"45rem"} alt="" />
              </Box>
              <Box
                mt={"4rem"}
                display={"flex"}
                flexDirection={"column"}
                width={"30rem"}
                borderBottom={"1px solid black"}
              >
                <Text fontWeight={"600"} fontSize={"1.5rem"}>
                  Fulfill every order
                </Text>
                <Text mt={"2rem"} mb={"3rem"}>
                  Get your products where they need to be with integrated
                  inventory management, streamlined returns, and a dedicated
                  shipping and fulfillment network.
                </Text>
              </Box>
            </Box>
            <Box display={"flex"}>
              <Box ml={"4rem"} mt={"4rem"} mr={"2rem"}>
                <img src={bars} width={"45rem"} alt="" />
              </Box>
              <Box
                mt={"4rem"}
                display={"flex"}
                flexDirection={"column"}
                width={"30rem"}
                borderBottom={"1px solid black"}
              >
                <Text fontWeight={"600"} fontSize={"1.5rem"}>
                  Manage your money where you make it
                </Text>
                <Text mt={"2rem"} mb={"3rem"}>
                  Manage your business finances all from one place with money
                  management and flexible funding designed with entrepreneurs in
                  mind.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App11;
