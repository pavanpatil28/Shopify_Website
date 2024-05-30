import React, { useEffect, useRef } from 'react'
import { Box, Text, Link, Center } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from 'react';

const App9 = () => {

    const [change,setchange] = useState([{
        text: ` "We went from burning beans in our garage to needing a 10,000 sq. ft facility to meet customer demand." `,
        author: "BLK & Bold",
        owner: "Rod Johnson — Owner",
        image: "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/testimonial1-small-8618ff26e0df67c99d48787c9c7aaf53ad23fddccb5ae0a5bac2132cebeb6ac1.png"
    },{
        text: ` "Shopify helped me take something that I put my heart and soul into and share it with people that need it and find it useful." `,
        author: "Satya",
        owner: "Patrice Mousseau — Owner",
        image: "https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/testimonial2-small-eef62b46a9ac3578b704ba270ced190529ff6760be681254a269279aac93af5b.png"
        
    }]); 

    const [num, setNum] = useState(0);

    const animate = useRef(0);

    const changeShape = ()=>{
        if(animate.current.style.transform === "rotate(0deg)"){
            animate.current.style.transform = "rotate(5deg)";
        }else{
            animate.current.style.transform = "rotate(0deg)";
        }
    }

  return (
    <Box mt={"8rem"}>
        <Box ml={"5.5rem"} mr={"5.5rem"} display={'flex'}>
            <Box mt={"3rem"} mb={"8rem"} display={"flex"} flexDirection={"column"}>
                <Text  width={"40rem"} fontSize={"2.8rem"} fontWeight={"600"}>{change[num].text}</Text>
                <Text mt={"2rem"} fontSize={"1.8rem"} fontWeight={"600"}>{change[num].author}</Text>
                <Box mt={"1rem"} display={'flex'}>
                    <Text fontWeight={"500"} mr={"0.5rem"}>{change[num].owner}</Text>
                </Box>
                <Box mt={"4rem"} display={'flex'} gap={"1rem"}>
                    <Link onClick={()=>{
                        changeShape()
                        setNum((prevVal)=>{
                            if(prevVal == 0){
                                return 1;
                            }else{
                                return 0;
                            }
                        })
                    }}><ArrowBackIcon border={"2px solid black"} fontSize={"3.2rem"} p={"0.8rem"} borderRadius={"5rem"} /></Link>
                    <Link onClick={()=>{
                        changeShape()
                        setNum((prevVal)=>{
                            if(prevVal == 0){
                                return 1;
                            }else{
                                return 0;
                            }
                        })
                    }}><ArrowForwardIcon border={"2px solid black"} fontSize={"3.2rem"} p={"0.8rem"} borderRadius={"5rem"} /></Link>
                </Box>
            </Box>
            <Box transform={"rotate(5deg)"} transition={'2s all'} ref={animate} borderRadius={'10px'} overflow={'hidden'} marginLeft={"14rem"} marginTop={"1rem"} zIndex={"-1"}>
                <img src={change[num].image} alt="aniimg1" />
            </Box>
        </Box>
    </Box>
  )
}

export default App9
