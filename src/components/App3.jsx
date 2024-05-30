import { Box, Text, Link } from '@chakra-ui/react'
import React from 'react'
import bodyimg2 from './Images/bodyimg2.png'

const App3 = () => {
  return (
    <Box backgroundColor={"rgb(250, 250, 250)"} pt={"5rem"} pb={"4rem"}>
        <Text fontWeight={"500"} textTransform={"uppercase"} pl={"5.5rem"}>build an online store</Text>
        <Text fontWeight={"600"} fontSize={"3rem"} pl={"5.5rem"} pb={"4rem"}>Your store, your way</Text>
        <img src={bodyimg2} alt="" />
        
        <Box pl={"5.5rem"} display={'flex'} gap={"1.5rem"}>
            <Box display={'flex'} flexDirection={"column"} gap={"1rem"} width={"27rem"} pt={"2rem"}>
                <hr />
                <Text mt={"1.5rem"} fontWeight={"500"} fontSize={"1.2rem"}>Build an online storefront</Text>
                <Text fontSize={"1.15rem"}>Bring your vision to life with our drag-and-drop store creator. No coding expertise required — just your next big idea.</Text>
                <Link textDecoration={"underline"} fontWeight={"500"}>Online Store Builder</Link>
            </Box>
            <Box display={'flex'} flexDirection={"column"} gap={"1rem"} width={"28rem"} pt={"2rem"}>
                <hr />
                <Text mt={"1.5rem"} fontWeight={"500"} fontSize={"1.2rem"}>Craft the brand you want</Text>
                <Text fontSize={"1.15rem"}>Select from customizable templates created by a community of world-class designers.</Text>
                <Link textDecoration={"underline"} fontWeight={"500"}>Theme Store</Link>
            </Box>
            <Box display={'flex'} flexDirection={"column"} gap={"1rem"} width={"26rem"} pt={"2rem"}>
                <hr />
                <Text mt={"1.5rem"} fontWeight={"500"} fontSize={"1.2rem"}>Level up with apps</Text>
                <Text fontSize={"1.15rem"}>Add more features and functionality to your online store with apps built by trusted Shopify developers.</Text>
                <Link textDecoration={"underline"} fontWeight={"500"}>Shopify App Store</Link>
            </Box>
        </Box>
    </Box>
  )
}

export default App3
