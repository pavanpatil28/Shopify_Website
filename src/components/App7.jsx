import React from 'react'
import { Box, Text, Button } from "@chakra-ui/react";

const App7 = () => {
  return (
    <Box backgroundColor={"rgb(81,242,148)"}>
        <Box pt={"3rem"} ml={"5.5rem"} mr={"5.5rem"} display={'flex'} flexDirection={"column"} textAlign={"center"} alignItems={"center"}>
            <Text fontSize={"3rem"} fontWeight={"600"}>Grow your <br /> business here</Text>
            <Text mt={"1rem"} fontSize={"1.4rem"} width={"58rem"}>Whether you want to sell products down the street or around the world, we have all the tools you need.</Text>
            <Button
              mt={"1.5rem"}
              mb={"3rem"}
              backgroundColor={"black"}
              color={"white"}
              borderRadius={"5rem"}
              _hover={{backgroundColor: "rgb(60,60,60)"}} 
              width={"9.2rem"}
              height={"3.5rem"}
            >
              Start free trial
            </Button>
        </Box>

    </Box>  
  )
}

export default App7
