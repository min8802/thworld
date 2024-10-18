import { Flex, Img, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import serviceTop from "../data/servicesTop.json"
import serviceBottom from "../data/servicesBottom.json"
import { motion, useAnimation, Variants } from "framer-motion"; 

interface ServicesProps {
    setIsRender : React.Dispatch<React.SetStateAction<boolean>>;
    tokenExInVariants : Variants;
    isRender : boolean
}

const Services : FC<ServicesProps> = ({isRender, setIsRender, tokenExInVariants}) => {
    const serviceTopAnimation = useAnimation();
    const serviceBottomAnimation = useAnimation();
    
    useEffect(() => {
        setIsRender(true); //컴포넌트가 렌더링 될 때 발생하는 시간 차를 감지 하기 위함
    },[])

    useEffect(() => {
        const targetElement = document.querySelector('#serviceTop');
        const targetBottomElement = document.querySelector('#serviceBottom');
        console.log(targetElement);
        const observer = new IntersectionObserver(
            (entries) => {
                for(let i=0; i<entries.length; i++) {
                    const entry = entries[0];
                    console.log(entry.target);
                    if(entry.target === targetElement) {
                        if(entry.isIntersecting) {
                            serviceTopAnimation.start("visible");
                            console.log("serviceTop visible")
                        }
                    }
                    
                    if(entry.target === targetBottomElement) {
                        if(entry.isIntersecting) {
                            serviceBottomAnimation.start("visible");
                            console.log("serviceBottom visible")
                        }
                    }
                }
                
            },
            {threshold : 0.1}
        );
        //entries추가
        if(targetElement) {
            console.log("Observing Service Top Element");
            observer.observe(targetElement);
        }
        if(targetBottomElement) {
            console.log("Observing Service Bottom Element");
            observer.observe(targetBottomElement);
        }
        
        return () => {
            if (targetElement) observer.unobserve(targetElement);
            if (targetBottomElement) observer.unobserve(targetBottomElement);
        } //이 코드가 있으면 내려갈 때 1번 올라올 때 1번 29번 줄이 출력
          //return 함수가 없을 때 내려갈 때 3번 올라올 때 3번 29번 줄이 출력
          //정확한 상태 감지하려면 정리함수 사용해주는 것을 권장
    },[isRender])
    
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
            <motion.div
            initial="hidden"
            animate={serviceTopAnimation}
            variants={tokenExInVariants}
            >
                <Flex w="1100px" mt={20} gap={8} id="serviceTop">
                    {serviceTop.map((v, i) => (
                        <Flex w="340px" minH="400px" p="20px" flexDir="column" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" >
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center">
                                    {v.content}
                                </Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </motion.div>
            <motion.div
            initial="hidden"
            animate={serviceBottomAnimation}
            variants={tokenExInVariants}
            >
                <Flex w="1100px" mt={12} gap={8} id="serviceBottom">
                    {serviceBottom.map((v, i) => (
                        <Flex w ="340px" minH="400px" p="20px" flexDir="column" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" >
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center">
                                    {v.content}
                                </Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </motion.div>
        </Flex>
        
        </>
    )
}

export default Services;