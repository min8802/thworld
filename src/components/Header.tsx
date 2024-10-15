import { Button, Flex, Img, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import StyledButton from "./StyledButton";
import { BiCaretDown } from "react-icons/bi";


interface HeaderProps {
    tokenExRef : React.RefObject<HTMLDivElement>;
    tokenUtilRef : React.RefObject<HTMLDivElement>;
    tokenRoadmapRef : React.RefObject<HTMLDivElement>;
    tokenAdRef : React.RefObject<HTMLDivElement>;
}

const HeaderMenu = ["HOME", "SERVICES", "ABOUT", "TOKEN", "ROADMAP", "TEAM", "FAQ", "CONTACT"];


const Header : FC<HeaderProps> = ({tokenExRef, tokenUtilRef, tokenRoadmapRef, tokenAdRef}) => {
    
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>("");

    const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth'});
    }

    const scrollHandler = () => {
        if (buttonText === "INTRODUCTION") {
            scrollToComponent(tokenExRef);
        } else if (buttonText === "TOKENUTILITY") {
            scrollToComponent(tokenUtilRef);
        } else if (buttonText === "ROADMAP") {
            scrollToComponent(tokenRoadmapRef);
        } else {
            scrollToComponent(tokenAdRef);
        }
    }

    useEffect(() => {
        const setScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', setScroll);
    },[])

    useEffect(() => {
        console.log(isScrolled);
    },[isScrolled]);

    return (
        <Flex
            w="full"
            px={["0","0","0","0","0","50","50"]}
            py="25px"
            h={isScrolled ? "80px" : "110px"}
            transition="height 0.8s ease, background-color 0.8s ease" //height 속성값 변화할 때 transition 적용
            bgColor={isScrolled ? "#262D4E" : "transparent"}
            alignItems="center"
            position="fixed"
            justifyContent="center"
            zIndex={4} // 아래로 넘어갈 때 글자 안보임
        >
            <Flex minW="10%">
                <Img minW={["180px","180px","180px","180px","180px","220px","220px"]} src="images/logo_thw.png"/>
            </Flex>
            <Flex w="90%" justifyContent="flex-end" alignItems="center">
                <Flex minW="992px" w="80%" h="6vh" justifyContent="flex-end" alignItems="center" pr={20}>
                    <Flex gap={["16px","16px","16px","16px","16px","20px","20px"]}>
                    {HeaderMenu.map((v) => (
                        <StyledButton 
                        buttonText={buttonText}
                        setButtonText={setButtonText}
                        scrollHandler={scrollHandler}
                        v={v}>{v}</StyledButton>
                    ))}
                    </Flex>
                </Flex>
                <Flex gap={4} alignItems="center">
                    <Flex alignItems="center">
                    <Image src="images/us.png" w="20px" h="20px"/>
                    <Menu>
                    <MenuButton as={Button} variant="none" color="white" _hover={{"color" : "#A3468C", "transition" : "color 0.5s ease"}}>
                        <Flex w={10} fontSize={["12px","12px","12px","12px","12px","16px","16px"]}>
                            EN<BiCaretDown />
                        </Flex>
                    </MenuButton>
                    <MenuList minWidth="100px" border="none" p={0}>
                        <MenuItem bgColor="#0C0E27" color="white" _hover={{"fontWeight" : "bold", "color" : "#A3468C", "bgColor" : "gray.300", transition : "background-color 0.5s ease, color 0.1s ease"}} onClick={() => alert('EN')}><Image src="images/us.png" w="20px" h="20px" mr={2}/>EN</MenuItem>
                        <MenuItem bgColor="#0C0E27" color="white" _hover={{"fontWeight" : "bold", "color" : "#A3468C", "bgColor" : "gray.300", transition : "background-color 0.5s ease, color 0.1s ease"}} onClick={() => alert('KR')}><Image src="images/kr.png" w="20px" h="20px" mr={2}/>KR</MenuItem>
                    </MenuList>
                    </Menu>
                    </Flex>
                    <Button
                    w={["90px","90px","90px","90px","90px","120px","120px"]}
                    h={["30px","30px","30px","30px","30px","36px","36px"]}
                    fontSize={["10px","10px","10px","10px","10px","15px","15px"]} 
                    bgGradient="linear(to-r, #ff3b8f, #ff9a3b)" 
                    color="white"
                    borderRadius="24px"
                    overflow="hidden"
                    _hover= {{
                        backgroundColor : "#0C0E27",
                        _before : {
                            transform : "translateX(100%)",
                        },
                    }}
                    _before={{
                        content : "''",
                        position : "absolute",
                        top : "0",
                        left : "0",
                        width : "100%",
                        height : "100%",
                        background : "rgba(255, 255, 255, 0.3)",
                        transition : "transform 0.5s ease",
                        transform : "translateX(0%)",
                    }}
                    >WHITE PAPER</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header;