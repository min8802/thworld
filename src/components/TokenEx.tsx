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
                        <Text w="700px" fontSize="24px" color="white" mt={4} mb={4}>
                            Token Presale is 
                            <mark style={{
                                marginLeft: "10px",
                                padding: "0px 12px",
                                background: "linear-gradient(90deg, #FF61C6, #FFC542)", // 그라데이션 색상
                                color: "white", // 텍스트 색상
                                borderRadius: "12px", // 둥근 모서리
                                fontWeight: "bold", // 텍스트 굵게
                                display: "inline-block" // 버튼처럼 보이도록
                                }}>
                                Live
                            </mark>
                        </Text>
                        <Flex w="700px" h="390px" py={5}>
                            <Img src="images/t_logo.png"/>
                            <Img src="images/t_logo.png"/>
                            <Img src="images/t_logo.png"/>
                        </Flex>
                        <Flex w="700px" gap={4} py={5}>
                        <Button
                            h={14}
                            bgGradient="linear(to-r, #ff3b8f, #ff9a3b)"
                            color="white"
                            borderRadius="24px"
                            padding="12px 24px"
                            fontWeight="bold"
                            overflow="hidden" //overflow가 들어가면 버튼 이외의 영역을 잘라줘서 무빙 그라데이션 효과
                            _hover={{
                                _before: {
                                  transform: "translateX(100%)", // 호버 시 효과 시작 지점으로 부터 흰색 줄이 해당 버튼 어디까지 갈지
                                },
                              }}
                              _before={{
                                content: "''",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                background: "rgba(255, 255, 255, 0.1)", // 흰색 반투명 줄 효과
                                transition: "transform 0.5s ease", // 부드럽게 애니메이션 적용
                                transform: "translateX(0%)", // 효과가 어디서 부터 시작할건지
                              }}
                            >
                            WHITEPAPER →
                        </Button>
                        
                        <Button
                            h={14}
                            bgGradient="linear(to-r, #ff3b8f, #ff9a3b)"
                            color="white"
                            borderRadius="24px"
                            padding="12px 24px"
                            fontWeight="bold"
                            overflow="hidden" //overflow가 들어가면 버튼 이외의 영역을 잘라줘서 무빙 그라데이션 효과
                            _hover={{
                                _before: {
                                  transform: "translateX(100%)", // 호버 시 효과 시작 지점으로 부터 흰색 줄이 해당 버튼 어디까지 갈지
                                },
                              }}
                              _before={{
                                content: "''",
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                background: "rgba(255, 255, 255, 0.1)", // 흰색 반투명 줄 효과
                                transition: "transform 0.5s ease", // 부드럽게 애니메이션 적용
                                transform: "translateX(0%)", // 효과가 어디서 부터 시작할건지
                              }}
                            >
                            BUY TOKEN NOW! →
                        </Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Img h="600px" src="images/giphy.gif" zIndex={2}/>
            </Flex>
        </Flex> 
    )
}

export default TokenEx;