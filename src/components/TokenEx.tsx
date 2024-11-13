import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";

interface TokenExProps {
    language : string;
}

const TokenEx : FC<TokenExProps> = ({language}) => {
  
    return (
        <>
        {language === "EN" ? //SERVICES 컴포넌트의 상단 효과 보여 주고 높이 Header랑 간격 적절히 맞추려 100vh가 아닌 minH=70vh로 설정
        <Flex w="full" minH="70vh" alignItems="center"> 
            <Flex mx="auto" mt={56}>
                <Flex ml={4} alignItems="center">                  
                    <Flex w="full" justifyContent="center">
                        <Flex flexDir="column" justifyContent="center">
                        <Img h={["420px","420px","420px","0","0px","0px","0px","0px"]} src="images/giphy.gif" zIndex={2}/>
                        <Text w="400px" fontSize={["32px","32px","32px","32px","32px","40px","40px"]} fontWeight="bold" color="white">
                            THW is peer to peer innovative  network
                        </Text>
                        <Text w="400px" fontSize={["16px","16px","16px","16px","16px","24px","24px"]} color="white" mt={4} mb={4}>
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
                        <Flex py={5} gap={4}>
                            <Img src="images/t_logo.png"/>
                            <Img src="images/x_logo.png"/>
                            <Img src="images/medium_logo.png"/>
                        </Flex>
                        <Flex gap={3} py={5}>
                        <Button
                            h={["40px","40px","40px","40px","40px","52px","52px"]}
                            bgGradient="linear(to-r, #ff3b8f, #ff9a3b)"
                            color="white"
                            borderRadius="24px"
                            padding="12px 24px"
                            fontWeight="bold"
                            overflow="hidden" //overflow가 들어가면 버튼 이외의 영역을 잘라줘서 무빙 그라데이션 효과
                            _hover={{
                                backgroundColor : "#0C0E27",
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
                            background: "rgba(255, 255, 255, 0.3)", // 흰색 반투명 줄 효과
                            transition: "transform 0.5s ease", // 부드럽게 애니메이션 적용
                            transform: "translateX(0%)", // 효과가 어디서 부터 시작할건지
                            }}
                            >
                            WHITEPAPER →
                        </Button>
                        
                        <Button
                            h={["40px","40px","40px","40px","40px","52px","52px"]}
                            bgGradient="linear(to-r, #ff3b8f, #ff9a3b)"
                            color="white"
                            borderRadius="24px"
                            padding="12px 24px"
                            fontWeight="bold"
                            overflow="hidden" //overflow가 들어가면 버튼 이외의 영역을 잘라줘서 무빙 그라데이션 효과
                            _hover={{
                                backgroundColor : "#0C0E27",
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
                                background: "rgba(255, 255, 255, 0.3)", // 흰색 반투명 줄 효과
                                transition: "transform 0.5s ease", // 부드럽게 애니메이션 적용
                                transform: "translateX(0%)", // 효과가 어디서 부터 시작할건지
                              }}
                            >
                            BUY TOKEN NOW →
                        </Button>
                        </Flex>
                        <Text w="400px" fontSize="16px" color="white" mt={4}>WE ACCEPT :</Text>
                        <Flex w="400px" gap={8}>
                            <Flex fontSize="20px" color="white" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/btc.png"/>BTC</Flex>
                            <Flex fontSize="20px" color="white" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/eth.png"/>ETH</Flex>
                            <Flex fontSize="20px" color="white" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/bnb.png"/>BNB</Flex>
                            <Flex fontSize="20px" color="white" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/usdt.png"/>USDT</Flex>
                        </Flex>
                        </Flex>
                        <Img h={["0px","0px","0px","480px","480px","480px","480px","480px"]} src="images/giphy.gif" zIndex={2}/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex> 
        :

        //SERVICES 컴포넌트의 상단 효과 보여 주고 높이 Header랑 간격 적절히 맞추려 100vh가 아닌 minH=70vh로 설정
        <Flex w="full" minH="70vh" alignItems="center"> 
            <Flex mx="auto" mt={56}>
                <Flex ml={4} alignItems="center">                  
                    <Flex w="full" justifyContent="center">
                        <Flex flexDir="column" justifyContent="center">
                        <Img h={["420px","420px","420px","0","0px","0px","0px","0px"]} src="images/giphy.gif" zIndex={2}/>
                        <Text w="400px" fontSize={["32px","32px","32px","32px","32px","40px","40px"]} fontWeight="bold" color="white">
                            THW는 혁신적인 <br/>네트워크입니다
                        </Text>
                        <Text w="400px" fontSize={["16px","16px","16px","16px","16px","24px","24px"]} color="white" mt={4} mb={4}>
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
                        <Flex py={5} gap={4}>
                            <Img src="images/t_logo.png"/>
                            <Img src="images/x_logo.png"/>
                            <Img src="images/medium_logo.png"/>
                        </Flex>
                        <Flex gap={3} py={5}>
                        <Button
                            h={["40px","40px","40px","40px","40px","52px","52px"]}
                            bgGradient="linear(to-r, #ff3b8f, #ff9a3b)"
                            color="white"
                            borderRadius="24px"
                            padding="12px 24px"
                            fontWeight="bold"
                            overflow="hidden" //overflow가 들어가면 버튼 이외의 영역을 잘라줘서 무빙 그라데이션 효과
                            _hover={{
                                backgroundColor : "#0C0E27",
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
                            background: "rgba(255, 255, 255, 0.3)", // 흰색 반투명 줄 효과
                            transition: "transform 0.5s ease", // 부드럽게 애니메이션 적용
                            transform: "translateX(0%)", // 효과가 어디서 부터 시작할건지
                            }}
                            >
                            백서 →
                        </Button>
                        
                        <Button
                            h={["40px","40px","40px","40px","40px","52px","52px"]}
                            bgGradient="linear(to-r, #ff3b8f, #ff9a3b)"
                            color="white"
                            borderRadius="24px"
                            padding="12px 24px"
                            fontWeight="bold"
                            overflow="hidden" //overflow가 들어가면 버튼 이외의 영역을 잘라줘서 무빙 그라데이션 효과
                            _hover={{
                                backgroundColor : "#0C0E27",
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
                                background: "rgba(255, 255, 255, 0.3)", // 흰색 반투명 줄 효과
                                transition: "transform 0.5s ease", // 부드럽게 애니메이션 적용
                                transform: "translateX(0%)", // 효과가 어디서 부터 시작할건지
                              }}
                            >
                            토큰 구매하기 →
                        </Button>
                        </Flex>
                        <Text w="400px" fontSize="16px" color="white" mt={4}>WE ACCEPT :</Text>
                        <Flex w="400px" gap={8}>
                            <Flex fontSize="20px" color="white" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/btc.png"/>BTC</Flex>
                            <Flex fontSize="20px" color="white" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/eth.png"/>ETH</Flex>
                            <Flex fontSize="20px" color="white" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/bnb.png"/>BNB</Flex>
                            <Flex fontSize="20px" color="white" mt={4} mb={4} alignItems="center" gap={1}><Img w="24px" h="24px" src="images/usdt.png"/>USDT</Flex>
                        </Flex>
                        </Flex>
                        <Img h={["0px","0px","0px","480px","480px","480px","480px","480px"]} src="images/giphy.gif" zIndex={2}/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex> }
        </>
        
    )
}

export default TokenEx;