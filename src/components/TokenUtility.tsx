import { Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";


const TokenUtility : FC = () => {
    return (
        <Flex w="full" minH="100vh" flexDir="column" justifyContent="center" mt={140}>
            <Text minH="10vh" textAlign="center" fontSize="40px" fontWeight="bold">Token Utility</Text>
            <Flex justifyContent="center" mt={10}>
                <Img w="700" h="800px" src="/images/ko_service.png"/>
            </Flex>
        </Flex> 
    )
}

export default TokenUtility;