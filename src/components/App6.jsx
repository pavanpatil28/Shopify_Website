import React from "react";
import { Box, Text, Link, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import icon1 from "./Images/icon1.png";
import icon2 from "./Images/icon2.png";
import icon3 from "./Images/icon3.png";
import icon4 from "./Images/icon4.png";

const App6 = () => {
  return (
    <Box color={"white"} backgroundColor={"black"} pt={"8rem"} pb={"8rem"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        ml={"5.5rem"}
        mr={"5.5rem"}
        textAlign={"center"}
      >
        <Text fontWeight={"500"}>SHOPIFY SUPPORT</Text>
        <Text fontSize={"3rem"} fontWeight={"600"}>
          The help you need, <br /> when you need it
        </Text>
      </Box>

      <Box mt={"4rem"} display={"flex"} ml={"12em"} mr={"12rem"}>
        <Box display={"flex"} flexDirection={"column"} mt={"0.2rem"}>
          <Box
            cursor={"pointer"}
            id="box1"
            ml={"1rem"}
            mb={"1.5rem"}
            pt={"3rem"}
            pl={"3rem"}
            backgroundColor={"rgb(15, 15, 15)"}
            borderRadius={"1rem"}
            border={"1px solid rgb(40, 40, 40)"}
          >
            <img width={"65rem"} src={icon2} alt="" />
            <Text
              width={"26rem"}
              fontSize={"2.2rem"}
              fontWeight={"600"}
              mr={"5rem"}
              mt={"2rem"}
            >
              Blog
            </Text>
            <Text mt={"1rem"} mr={"5rem"}>
              Get all the marketing and business strategy tips you
            </Text>
            <Text mr={"5rem"}>need to help you run an online business</Text>
            <Button
              mt={"3rem"}
              mb={"2rem"}
              backgroundColor={"rgb(20, 20, 20)"}
              color={"white"}
              border={"1px solid "}
              borderRadius={"5rem"}
            >
              Read <ChevronRightIcon id="arrow1" />
            </Button>
          </Box>
          <Box
            cursor={"pointer"}
            id="box2"
            ml={"1rem"}
            pt={"3rem"}
            pl={"3rem"}
            backgroundColor={"rgb(15, 15, 15)"}
            borderRadius={"1rem"}
            border={"1px solid rgb(40, 40, 40)"}
          >
            <img width={"65rem"} src={icon4} alt="" />

            <Text
              width={"26rem"}
              fontSize={"2.2rem"}
              fontWeight={"600"}
              mr={"5rem"}
              mt={"2rem"}
            >
              Community
            </Text>
            <Text mt={"1rem"} mr={"5rem"}>
              Connect with a community of brands, parteners, and
            </Text>
            <Text mr={"5rem"}>fellow merchants who understand Shopify.</Text>
            <Button
              mt={"3rem"}
              mb={"2rem"}
              backgroundColor={"rgb(20, 20, 20)"}
              color={"white"}
              border={"1px solid "}
              borderRadius={"5rem"}
            >
              Discuss <ChevronRightIcon id="arrow2" />
            </Button>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} mt={"0.2rem"}>
          <Box
            cursor={"pointer"}
            id="box3"
            ml={"1.5rem"}
            mb={"1.5rem"}
            pt={"3rem"}
            pl={"3rem"}
            backgroundColor={"rgb(15, 15, 15)"}
            borderRadius={"1rem"}
            border={"1px solid rgb(40, 40, 40)"}
          >
            <img width={"65rem"} src={icon3} alt="" />

            <Text
              width={"26rem"}
              fontSize={"2.2rem"}
              fontWeight={"600"}
              mr={"5rem"}
              mt={"2rem"}
            >
              Online Courses
            </Text>
            <Text mt={"1rem"} mr={"5rem"}>
              Learn tried-and-tested business tips with instant
            </Text>
            <Text mr={"5rem"}>
              access to lessons from successful entrepreneurs.
            </Text>
            <Button
              mt={"3rem"}
              mb={"2rem"}
              backgroundColor={"rgb(20, 20, 20)"}
              color={"white"}
              border={"1px solid "}
              borderRadius={"5rem"}
            >
              Learn <ChevronRightIcon id="arrow3" />
            </Button>
          </Box>
          <Box
            cursor={"pointer"}
            id="box4"
            ml={"1.5rem"}
            pt={"3rem"}
            pl={"3rem"}
            backgroundColor={"rgb(15, 15, 15)"}
            borderRadius={"1rem"}
            border={"1px solid rgb(40, 40, 40)"}
          >
            <img width={"65rem"} src={icon1} alt="" />

            <Text
              width={"26rem"}
              fontSize={"2.2rem"}
              fontWeight={"600"}
              mr={"5rem"}
              mt={"2rem"}
            >
              Help Center
            </Text>
            <Text mt={"1rem"} mr={"5rem"}>
              Learn tried-and-tested business tips with instant
            </Text>
            <Text mr={"5rem"}>
              access to lessons from successful entrepreneurs.
            </Text>
            <Button
              mt={"3rem"}
              mb={"2rem"}
              backgroundColor={"rgb(20, 20, 20)"}
              color={"white"}
              border={"1px solid "}
              borderRadius={"5rem"}
            >
              Get help <ChevronRightIcon id="arrow4" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App6;
