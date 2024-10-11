import { Flex, Img } from "@chakra-ui/react";
import { FC } from "react";


const Footer : FC = () => {
    return (
        <Flex w="full" minH="40vh" flexDir="column" justifyContent="center" gap={10} bgColor="black" color="white">
            <Img w={20} h={20} ml={20} src="/images/logo.png"/>
            <Flex ml={20}>
            Lightning Wolf  
            </Flex>     
            <Flex ml={20}>
            Copyright 2024. Lightning wolf All rights reserved.
            </Flex>     
        </Flex> 
    )
}

export default Footer;