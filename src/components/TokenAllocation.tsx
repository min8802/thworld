import { Box, Button, Flex, Grid, Img, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion"; 

interface AboutProps {
    isRender : boolean;
    tokenExInVariants : Variants;
}

const TokenAllocation : FC<AboutProps> = ({isRender, tokenExInVariants}) => {

    const tokenMidAnimation = useAnimation();

    useEffect(() => {
        const targetElement = document.querySelector('#tokenMid');
        console.log(targetElement);
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                console.log(entry.target)
                if(entry.target === targetElement) {
                    if(entry.isIntersecting) {
                        tokenMidAnimation.start("visible");
                    }
                }
            },
            {threshold: 0.0}
        )
        if(!targetElement) return;
        observer.observe(targetElement);

        return () => {
            observer.unobserve(targetElement);
        }
    },[isRender])

    return (
        <Flex
            w="100%"
            minH="90vh"
            color="white"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={20}>
                TOKEN SALE PROCEEDS
            </Text>
            <motion.div
            initial="hidden"
            animate={tokenMidAnimation}
            variants={tokenExInVariants}
            >
                <Flex w={["330px","330px","780px","1100px","1100px","1100px","1100px"]} mx="auto" gap={12} id="tokenMid" justifyContent="center" flexDir="column" alignItems="center">
                    <Img w={["450px","450px","450px","450px","450px","555px","555px"]} src="images/tokenSale.png"/>
                    <Flex as="ul" listStyleType="none" gap={["8px","8px","8px","16px","16px","16px","16px"]} fontSize={["12px","12px","12px","16px","16px","16px","16px"]}>
                        <Flex as="li" align="center">
                            <Box boxSize={3} bg="orange.500" borderRadius="sm" mr={2}></Box>
                            <Text>Foundation</Text>
                        </Flex>
                        <Flex as="li" align="center">
                            <Box boxSize={3} bg="pink.500" borderRadius="sm" mr={2}></Box>
                            <Text>Marketing</Text>
                        </Flex>
                        <Flex as="li" align="center">
                            <Box boxSize={3} bg="blue.300" borderRadius="sm" mr={2}></Box>
                            <Text>Maintenance</Text>
                        </Flex>
                        <Flex as="li" align="center">
                            <Box boxSize={3} bg="purple.500" borderRadius="sm" mr={2}></Box>
                            <Text>Sales</Text>
                        </Flex>
                        <Flex as="li" align="center">
                            <Box boxSize={3} bg="green.300" borderRadius="sm" mr={2}></Box>
                            <Text>Reserve</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </motion.div>
        </Flex>
    )
}

export default TokenAllocation;