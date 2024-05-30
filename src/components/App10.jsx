import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const App10 = () => {
  return (
    <Link id="transitionlink">
      <Box
        backgroundColor={"rgb(160,248,120)"}
        display={"flex"}
        padding={"1rem"}
      >
        <marquee behavior="" scrolldelay="0" direction="right">
          <Text
            fontSize={"2rem"}
            fontWeight={"500"}
            textTransform={"uppercase"}
          >
            start your free trial <ArrowForwardIcon width={"5rem"} /> start your
            free trial <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} /> start your free trial{" "}
            <ArrowForwardIcon width={"5rem"} />
          </Text>
        </marquee>
      </Box>
    </Link>
  );
};

export default App10;
