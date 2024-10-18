import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";

interface ServicesProps {
    setIsRender : React.Dispatch<React.SetStateAction<boolean>>;
}

const Services : FC<ServicesProps> = ({setIsRender}) => 
    {
        useEffect(() => {
            setIsRender(true);
        },[])
    
        return (
        <>
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
                Meet Our Solution For You
            </Text>
            <Text color="white" textAlign="center">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
            </Text>
        </Flex>
        
        </>
    )
}

export default Services;