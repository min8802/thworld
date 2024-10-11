import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";
import tokenAllocation from "../data/tokenAllocation.json"
import { FaSquare } from "react-icons/fa";

const TokenAllocation : FC = () => {
    return (
        <Flex w="full" minH="100vh" alignItems="center" flexDir="column">
            <Flex minH="10vh" mt={40} fontSize="40px" fontWeight="bold">TOKEN ALLOCATION</Flex>
            <Flex w="1200px" h="6vh" alignItems="center" justifyContent="space-between" fontSize="20px">
                <Flex alignItems="center" gap={2}><FaSquare color="orange"/>Project Development Fund</Flex>
                <Flex alignItems="center" gap={2}><FaSquare color="green"/>Liquidity Pool</Flex>
                <Flex alignItems="center" gap={2}><FaSquare color="purple"/>Development and Marketing</Flex>
                <Flex alignItems="center" gap={2}><FaSquare color="blue"/>Community Rewards</Flex>
            </Flex>
            <Flex w="1200px">
                <Img src="/images/token.png" mt={20}/>
                <Flex justifyContent="center" flexDir="column">
                    <Flex w="500px" minH="6vh" justifyContent="space-between" ml={24} mt={12} fontSize="28px" fontWeight="bold">
                        <Text>Total Supply</Text>
                        <Text>1,000,000,000 LNWF</Text>
                    </Flex>
                    <Box w="500px" h="4px" ml={24} bg="black"></Box>
                    {tokenAllocation.map((v,i) => (
                        <>
                            {Object.entries(v).map(([key,value]) => (
                                <>
                                <Flex w="500px" minH="6vh" justifyContent="space-between" alignItems="center" ml={24} key={i}>
                                    <Text>{key}</Text>
                                    <Text>{value}</Text>
                                </Flex>
                                <Box w="500px" h="2px" ml={24} bg="gray.200"></Box>
                                </>
                            ))}
                        </>
                    ))}
                </Flex>
            </Flex>
        </Flex> 
    )
}

export default TokenAllocation;