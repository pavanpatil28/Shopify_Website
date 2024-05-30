import React from 'react'
import { Box, Text, Link } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const App8 = () => {
  return (
    <Box pt={"4rem"} pb={"3rem"}>
        <Box ml={"5.5rem"} mr={"5.5rem"} display={'flex'} pb={"5rem"} borderBottom={"1px solid rgb(210,210,210)"}>
            <i id='logoicon' class="fa-brands fa-shopify"></i>

            <Box ml={"19rem"} display={'flex'} flexDirection={"column"} gap={"0.8rem"}>
                <Text fontWeight={500}>Shopify</Text>
                <Link mt={"1rem"}>About</Link>
                <Link>Careers</Link>
                <Link>Investors</Link>
                <Link>Press and Media</Link>
                <Link>Partners</Link>
                <Link>Affilliates</Link>
                <Link>Legal</Link>
                <Link>Service status</Link>

                <Text mt={"4rem"} fontWeight={500}>Global impact</Text>
                <Link mt={"1rem"}>Sustainability</Link>
                <Link>Social impact</Link>
                <Link>Build Black</Link>
                <Link>Build Native</Link>
                <Link>Research</Link>
            </Box>
            <Box ml={"8.3rem"} display={'flex'} flexDirection={"column"} gap={"0.8rem"}>
                <Text fontWeight={500}>Support</Text>
                <Link mt={"1rem"}>Merchant support</Link>
                <Link>Help center</Link>
                <Link>Hire a Partner</Link>
                <Link>Shopify Community</Link>
                <Link>Shopify Events</Link> 

                <Text mt={"11rem"} fontWeight={500}>Solutions</Text>
                <Link mt={"1rem"}>Online store builder</Link>
                <Link>Website builder</Link>
                <Link>Ecommerce website</Link>
            </Box>
            <Box ml={"8.3rem"} display={'flex'} flexDirection={"column"} gap={"0.8rem"}>
                <Text fontWeight={500}>Developers</Text>
                <Link mt={"1rem"}>Shopify.dev</Link>
                <Link>API documentation</Link>
                <Link>Dev Degree</Link>
            </Box>
            <Box ml={"8.3rem"} display={'flex'} flexDirection={"column"} gap={"0.8rem"}>
                <Text fontWeight={500}>Products</Text>
                <Link mt={"1rem"}>Shop</Link>
                <Link>Shop Pay</Link>
                <Link>Shopify Plus</Link>
                <Link>Shopify Fulfillment Network</Link>
                <Link>Linkpop</Link>
                <Link>Commerce Components</Link>
            </Box>
        </Box>
        <Box display={'flex'} ml={"5.5rem"} mr={"5.5rem"} pt={"3rem"}>
            <Box display={'flex'} gap={"3rem"}>
                <Text><i id='globe' class="fa-solid fa-globe"></i>USA<TriangleDownIcon ml={"0.5rem"} fontSize={"0.7rem"} mb={"0.2rem"}/></Text>
                <Link>Terms of Service</Link>
                <Link>Privacy Policy</Link>
                <Link>Sitemap</Link>
                <Link>Privacy Choices</Link>
            </Box>
            <Box display={'flex'} gap={"1.5rem"} ml={"21.7rem"}>
                <Link><i id='footericons' class="fa-brands fa-square-x-twitter"></i></Link>
                <Link><i id='footericons' class="fa-brands fa-square-facebook"></i></Link>
                <Link><i id='footericons' class="fa-brands fa-square-youtube"></i></Link>
                <Link><i id='footericons' class="fa-brands fa-square-instagram"></i></Link>
                <Link><i id='footericons' class="fa-brands fa-tiktok"></i></Link>
                <Link><i id='footericons' class="fa-brands fa-linkedin"></i></Link>
                <Link><i id='footericons' class="fa-brands fa-square-pinterest"></i></Link>
            </Box>
        </Box>
    </Box>
  )
}

export default App8
