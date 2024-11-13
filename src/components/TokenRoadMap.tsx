import { Box, Flex, Text, IconButton, useMediaQuery } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface AboutProps {
    isRender: boolean;
    tokenExInVariants: Variants;
}

const TokenRoadMap: FC<AboutProps> = ({ isRender, tokenExInVariants }) => {
    const aboutMidAnimation = useAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const targetElement = document.querySelector('#roadmap');
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.target === targetElement) {
                    if (entry.isIntersecting) {
                        aboutMidAnimation.start("visible");
                    }
                }
            },
            { threshold: 0.0 }
        );
        if (!targetElement) return;
        observer.observe(targetElement);

        return () => {
            observer.unobserve(targetElement);
        }
    }, [isRender]);

    const roadmapItems = [
        { quarter: "Q2 2024", details: ["Begin construction of Theme Healing World", "Issue Theme Healing World tokens", "Launch Theme Healing World website"] },
        { quarter: "Q3 2024", details: ["Aim for initial listing on a global exchange", "Continue construction of Theme Healing World", "Announce completion of specific zone construction within Theme Healing World"], bg: "pink.600" },
        { quarter: "Q4 2024", details: ["Announce completion of specific zone construction within Theme Healing World", "Open shops within Theme Healing World", "Establish payment system in Theme Healing World"] },
        { quarter: "Q1 2025", details: ["Complete construction of Theme Healing World", "Official opening of Theme Healing World", "Upgrade the Theme Healing World website"] },
        { quarter: "Q2 2025", details: ["Projected 100,000 cumulative members for Theme Healing World", "Aim for listing on a domestic exchange (KRW)", "Aim for listing on a global exchange"] },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : roadmapItems.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < roadmapItems.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <Flex
            w="100%"
            minH="70vh"
            color="white"
            pt={56}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={20}>
                Roadmap
            </Text>
            <motion.div
                initial="hidden"
                animate={aboutMidAnimation}
                variants={tokenExInVariants}
            >
                <Flex
                    flexDir="column"
                    alignItems="center"
                    id="roadmap"
                    w={["350px","350px", "780px","1100px","1100px", "1100px", "1100px"]}
                    mx="auto"
                    gap={12}
                >
                    <Flex
                        position="relative"
                        alignItems="center"
                        w="100%"
                        justifyContent="center"
                        mb={10}
                    >
                        {isTabletOrSmaller ? (
                            <>
                                {/* Left Arrow */}
                                <IconButton
                                    icon={<ArrowBackIcon />}
                                    onClick={handlePrev}
                                    position="absolute"
                                    left={0}
                                    bg="transparent"
                                    color="white"
                                    fontSize="24px"
                                    _hover={{ bg: "gray.700" }}
                                    aria-label="Previous"
                                    
                                />

                                {/* Single Timeline Item for Tablet/Mobile */}
                                <Flex
                                    flexDir="column"
                                    alignItems="center"
                                    textAlign="center"
                                    w="200px"
                                    bg={roadmapItems[currentIndex].bg || "transparent"}
                                    p={4}
                                    borderRadius="md"
                                >
                                    <Box bg="pink.400" w={8} h={8} borderRadius="full" mb={4} />
                                    <Text fontWeight="bold" mb={4}>{roadmapItems[currentIndex].quarter}</Text>
                                    <Box>
                                        {roadmapItems[currentIndex].details.map((detail, i) => (
                                            <Text fontSize="sm" key={i} mb={2}>
                                                - {detail}
                                            </Text>
                                        ))}
                                    </Box>
                                </Flex>

                                {/* Right Arrow */}
                                <IconButton
                                    icon={<ArrowForwardIcon />}
                                    onClick={handleNext}
                                    position="absolute"
                                    right={0}
                                    bg="transparent"
                                    fontSize="24px"
                                    color="white"
                                    _hover={{ bg: "gray.700" }}
                                    aria-label="Next"
                                />
                            </>
                        ) : (
                            /* Full Timeline for Desktop */
                            roadmapItems.map((item, index) => (
                                <Flex
                                    key={index}
                                    flexDir="column"
                                    alignItems="center"
                                    textAlign="center"
                                    w="200px"
                                    bg={item.bg || "transparent"}
                                    p={4}
                                    borderRadius="md"
                                >
                                    <Box bg="pink.400" w={8} h={8} borderRadius="full" mb={4} />
                                    <Text fontWeight="bold" mb={4}>{item.quarter}</Text>
                                    <Box>
                                        {item.details.map((detail, i) => (
                                            <Text fontSize="sm" key={i} mb={2}>
                                                - {detail}
                                            </Text>
                                        ))}
                                    </Box>
                                </Flex>
                            ))
                        )}
                    </Flex>
                </Flex>
            </motion.div>
        </Flex>
    );
};

export default TokenRoadMap;
