import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";


const About : FC = () => {
    return (
        <Flex
            w="100%"
            minH="100vh"
            color="white"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={12}>
                Token Introduction
            </Text>
            <Text color="white" textAlign="center">
            We gives you amazing user experience !
            </Text>
        </Flex>
    )
}

export default About;