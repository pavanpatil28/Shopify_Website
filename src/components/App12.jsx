import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import hash from "./Images/hash.png";
import attherate from "./Images/attherate.png";
import bars from "./Images/bars.png";
import body1 from "./Images/body1.png";

const App11 = () => {
  return (
    <Box
      pb={"5rem"}
      backgroundColor={"rgb(250, 250, 250)"}
      pt={"4rem"}
      mt={"5rem"}
    >
      <Box
        ml={"5.5rem"}
        mr={"5.5rem"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Text fontWeight={"500"}>BUILT-IN MARKETING TOOLS</Text>
        <Box mt={"1.5rem"} display={"flex"}>
          <Box mr={"20.5rem"}>
            <Text fontSize={"3rem"} fontWeight={"600"} width={"40rem"}>
                From first touch to full funnel
            </Text>
          </Box>
          <Box>
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
                  width={"84%"}
                >
                  <Box id="startselling">
                    <Link
                      href="https://www.shopify.com/pos"
                      _hover={{ textDecoration: "none" }}
                    >
                      Leverage our full marketing suite
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
          <Box width={"55rem"}>
            <Box display={"flex"}>
              <Box mt={"5rem"} mr={"2rem"}>
                <img src={hash} width={"45rem"} alt="" />
              </Box>
              <Box
                mt={"5rem"}
                display={"flex"}
                flexDirection={"column"}
                width={"35.5rem"}
                borderBottom={"1px solid black"}
              >
                <Text fontWeight={"600"} fontSize={"1.5rem"}>
                  Reach new leads
                </Text>
                <Text mt={"2rem"} mb={"3rem"} fontSize={"1.1rem"}>
                  Find new shoppers with the SEO, social media, and content
                  marketing tools that help you reach customers where they are.
                </Text>
              </Box>
            </Box>
            <Box display={"flex"}>
              <Box mt={"4rem"} mr={"2rem"}>
                <img src={attherate} width={"45rem"} alt="" />
              </Box>
              <Box
                mt={"4rem"}
                display={"flex"}
                flexDirection={"column"}
                width={"35.5rem"}
                borderBottom={"1px solid black"}
              >
                <Text fontWeight={"600"} fontSize={"1.5rem"}>
                  Engage with customers
                </Text>
                <Text mt={"2rem"} mb={"3rem"} fontSize={"1.1rem"}>
                  Build custom email campaigns, set automation to serve every <br />
                  segment, and connect with customers on the go with integrated
                  messaging tools.
                </Text>
              </Box>
            </Box>
            <Box display={"flex"}>
              <Box mt={"4rem"} mr={"2rem"}>
                <img src={bars} width={"45rem"} alt="" />
              </Box>
              <Box
                mt={"4rem"}
                display={"flex"}
                flexDirection={"column"}
                width={"35.5rem"}
                borderBottom={"1px solid black"}
              >
                <Text fontWeight={"600"} fontSize={"1.5rem"}>
                  Data you can build on
                </Text>
                <Text mt={"2rem"} mb={"3rem"} fontSize={"1.1rem"}>
                  Take control of your customer data to build custom audiences
                  and explore the customer insights that drive ongoing growth
                </Text>
              </Box>
            </Box>
          </Box>
          <Box mt={"8rem"} ml={"5rem"}>
            <img src={body1} alt="body1img"/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App11;
