import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";


const TokenEx : FC = () => {
    return (
        <Flex w="full" ml={40} pt={40}>
            <Flex w="1000px">
                <Flex ml={20}>
                    <Flex mt={48} justifyContent="center" h="14vh" alignItems="center" position="relative" flexDir="column">
                        <Text w="700px" fontSize="40px" fontWeight="bold" color="white">
                            THW is peer to peer innovative  network
                        </Text>
                        <Text w="700px" fontSize="30px" color="white" mt={4} mb={4}>
                            Token Presale is 
                            <mark style={{"marginLeft" : "20px"}}>
                            live
                            </mark>
                        </Text>
                        <Flex w="700px" gap={4}>
                        <Button>White Paper</Button>
                        <Button>Buy Token</Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Img h="600px" src="images/giphy.gif" zIndex={2}/>
            </Flex>
        </Flex> 
    )
}

export default TokenEx;