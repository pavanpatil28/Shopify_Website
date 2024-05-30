import React from "react";
import { Box, Text, ListItem, UnorderedList, Link } from "@chakra-ui/react";
import backgroundVideo from "./Video/vid.mp4";
import ShopifyLogo from "./Images/logo.svg";
import bodyimg1 from "./Images/bodyimg1.png";
import {ChevronDownIcon} from '@chakra-ui/icons'

const App = () => {
  return (
    <Box>
      <Box className="header" overflow={"hidden"}>
        <Box className="navbar" display={"flex"}>
          <Box
            ml={"5.5rem"}
            display={"flex"}
            alignItems={"center"}
            gap={"0.2rem"}
          >
            <Box>
              <Link href="#">
                <img id="shopifylogo" src={ShopifyLogo} alt="logo" />
              </Link>
            </Box>

            <Box>
              <Link href="#">
                <Text
                  color={"white"}
                  fontSize={"1.5rem"}
                  fontFamily={"'Poppins', sans-serif"}
                  fontWeight={"600"}
                  fontStyle={"italic"}
                >
                  shopify
                </Text>
              </Link>
            </Box>
          </Box>
          <Box display={"flex"} pt={"1.5rem"} ml={"2rem"}>
            <UnorderedList>
              <ListItem
                listStyleType={"none"}
                color={"white"}
                display={"flex"}
                gap={"2rem"}
              >
                <Link href="#">
                  Solutions
                  <ChevronDownIcon id="navarrow"/>
                </Link>
                <Link href="#">Pricing</Link>
                <Link href="#">
                  Resources
                  <ChevronDownIcon id="navarrow"/>
                </Link>
                <Link href="#">
                  What's new
                  <ChevronDownIcon id="navarrow"/>
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box display={"flex"} gap={"2rem"} ml={"30rem"}>
            <UnorderedList pt={"1.5rem"}>
              <ListItem listStyleType={"none"} color={"white"}>
                <Link href="#">Log in</Link>
              </ListItem>
            </UnorderedList>
            <Box
              backgroundColor={"white"}
              height={"2.7rem"}
              mt={"0.9rem"}
              p={"0.6rem 1.4rem 0.6rem 1.4rem"}
              borderRadius={"70rem"}
              fontWeight={"600"}
              cursor={"pointer"}
              _hover={{ background: "#eee" }}
            >
              <Text>Start free trial</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="naveffect" role="group">
        <Box color={"white"} ml={"5.5rem"}>
          <Text fontSize={"3.4rem"} fontWeight={"600"} mt={"15.3rem"}>
            Making Commerce <br /> Better for Everyone
          </Text>
          <Text fontSize={"1.4rem"} mt={"1.2rem"}>
            Shopify is supporting the next generation of <br /> entrepreneurs,
            the world’s biggest brands, and everyone <br /> in between
          </Text>
        </Box>

        <Box m={"9rem 0rem 2rem 5.5rem"} display={"flex"}>
          <Box
            backgroundColor={"white"}
            border={"2px solid white"}
            p={"0.9rem 2rem 0.9rem 2rem"}
            borderRadius={"70rem"}
            fontWeight={"600"}
            cursor={"pointer"}
            _hover={{ background: "rgb(0,0,0,0)", color: "white" }}
          >
            <Text>Start free trial</Text>
          </Box>
          <Box color={"white"} ml={"1rem"} pt={"0.3rem"}>
            <Text>
              Start for free, then get your <br /> first 3 months for ₹20/mo.
            </Text>
          </Box>
          <Box
            ml={"43rem"}
            color={"white"}
            backgroundColor={"rgb(0,0,0,0)"}
            border={"2px solid white"}
            p={"0.9rem 2rem 0.9rem 2rem"}
            borderRadius={"70rem"}
            cursor={"pointer"}
            _hover={{ background: "white", color: "black" }}
          >
            <Text>
              <i id="playbutton" class="fa-solid fa-play"></i>Watch the Shopify
              Story
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className="homeimage">
          <video autoPlay loop muted id="video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
      </Box>

      <Box>
        <Box mt={"8rem"} mb={"4rem"}>
          <img width={"100%"} src={bodyimg1} alt="bodyimg1" />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
