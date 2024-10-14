import { Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";


const TokenEx2 : FC = () => {
    return (
        <>
        <Flex
            w="full"
            minH="100vh"
            color="white"
            pt={10}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={12}>
                Meet Our Solution For You
            </Text>
            <Text w={["600px","600px","650px","650px","750px"]} color="white" textAlign="center">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
            </Text>
        </Flex>
        
        </>
    )
}

export default TokenEx2;