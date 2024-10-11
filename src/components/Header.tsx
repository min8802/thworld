import { Box, Button, Flex, Img, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import StyledButton from "./StyledButton";


interface HeaderProps {
    tokenExRef : React.RefObject<HTMLDivElement>;
    tokenUtilRef : React.RefObject<HTMLDivElement>;
    tokenRoadmapRef : React.RefObject<HTMLDivElement>;
    tokenAdRef : React.RefObject<HTMLDivElement>;
}

const Header : FC<HeaderProps> = ({tokenExRef, tokenUtilRef, tokenRoadmapRef, tokenAdRef}) => {
    
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth'});
    }

    const scrollHandler = (event : React.MouseEvent<HTMLButtonElement>) => {
        let buttonText = event.currentTarget.innerText;
        console.log(buttonText)
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
            h={isScrolled ? "85px" : "100px"}
            transition="height 0.8s ease, background-color 0.8s ease" //height 속성값 변화할 때 transition 적용
            bgColor={isScrolled ? "#262D4E" : "transparent"}
            flexDir="column"
            alignItems="center"
            position="fixed"
            justifyContent="center"
            zIndex={4} // 아래로 넘어갈 때 글자 안보임
        >
            <Img src="images/logo_thw.png" left={32}  position="absolute"/>
            <Flex w="98%" justifyContent="flex-end">
                <Flex w="1150px" h="6vh" justifyContent="space-between" alignItems="center" gap={20}>
                    <Box>
                    <StyledButton>HOME</StyledButton>
                    <StyledButton onClick={scrollHandler}>SERVICES</StyledButton>
                    <StyledButton onClick={scrollHandler}>ABOUT</StyledButton>
                    <StyledButton onClick={scrollHandler}>TOKEN</StyledButton>
                    <StyledButton onClick={scrollHandler}>ROADMAP</StyledButton>
                    <StyledButton onClick={scrollHandler}>TEAM</StyledButton>
                    <StyledButton onClick={scrollHandler}>FAQ</StyledButton>
                    <StyledButton onClick={scrollHandler}>CONTACT</StyledButton>
                    </Box>
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
        </Flex>
    )
}

export default Header;