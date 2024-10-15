import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";


const TokenEx2 : FC = () => {
    return (
        <>
        <Flex
            w="100%"
            h="auto"
            color="white"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
            justifyContent="center"
        >
            <Text fontSize="26px" mb={12}>
                Meet Our Solution For You
            </Text>
            <Text color="white" textAlign="center">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
            </Text>
        </Flex>
        
        </>
    )
}

export default TokenEx2;