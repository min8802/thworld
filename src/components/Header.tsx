import { Button, Flex, Img, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import StyledButton from "./StyledButton";


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
                <Img minW={["180px","180px","180px","180px","180px","260px","260px"]} src="images/logo_thw.png"/>
            </Flex>
            <Flex w="90%" justifyContent="flex-end" alignItems="center">
                <Flex minW="992px" w="80%" h="6vh" justifyContent="center" alignItems="center">
                    <Flex gap={4}>
                    {HeaderMenu.map((v) => (
                        <StyledButton 
                        buttonText={buttonText}
                        setButtonText={setButtonText}
                        scrollHandler={scrollHandler}
                        v={v}>{v}</StyledButton>
                    ))}
                    </Flex>
                </Flex>
                <Flex gap={4}>
                    <Flex alignItems="center">
                    <Image src="images/us.png" w="20px" h="20px"/>
                    <Menu>
                    <MenuButton as={Button} variant="none" color="white">
                        EN
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => alert('옵션 1 선택됨')}>옵션 1</MenuItem>
                        <MenuItem onClick={() => alert('옵션 2 선택됨')}>옵션 2</MenuItem>
                        <MenuItem onClick={() => alert('옵션 3 선택됨')}>옵션 3</MenuItem>
                    </MenuList>
                    </Menu>
                    </Flex>
                    <Button>WHITE PAPER</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header;