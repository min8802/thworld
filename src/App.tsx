import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion"; 
import Header from "./components/Header";
import TokenEx from "./components/TokenEx";
import Service from "./components/Service";

// import TokenUtility from "./components/TokenUtility";
// import TokenAllocation from "./components/TokenAllocation";
// import TokenRoadMap from "./components/TokenRoadMap";
// import Footer from "./components/Footer";
import About from "./components/About";


const headerInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const tokenExInVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: -40, transition: { duration: 1.2, delay: 1.0 } },
};

const ServicesInVariants = {
  hidden: { 
    opacity: 0, 
    clipPath: "inset(0 50% 0 50%)", // 중앙에서부터 시작해서 양옆이 잘린 상태로 표시
  },
  visible: { 
    opacity: 1, 
    clipPath: "inset(0 0% 0 0%)",  // 양옆으로 펼쳐지면서 보여줌
    transition: { 
      duration: 0.8, 
      delay: 0.5, 
      ease: "easeOut" 
    }
  },
};


//opacity 는 투명도
//y는 hidden 시작점이 0이고 visible -50이니까 위로 50 만큼 이동

const App = () => {
  const [init, setInit] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [tokenServiceVisible, setTokenServiceVisible] = useState(false);
  const [tokenAboutVisible, setTokenAboutVisible] = useState(false);

  const tokenHomeRef = useRef<HTMLDivElement>(null);
  const tokenServiceRef = useRef<HTMLDivElement>(null);
  const tokenAboutRef = useRef<HTMLDivElement>(null);
  const tokenRoadmapRef = useRef<HTMLDivElement>(null);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };


  // 최소 1초 동안 로딩 스피너를 보여주기 위한 타이머 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // tsParticles 초기화
  useEffect(() => {
    if (showSpinner) return;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [showSpinner]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (tokenServiceRef.current) {
  //       console.log(tokenServiceRef.current); // <div>..content..</div>
  //       // 현재 viewport에 포함되어 있는지 확인
  //       const { top, bottom } = tokenServiceRef.current.getBoundingClientRect();
  //       //이 구조분해에서는 이름으로 변수 할당하기 때문에 top, bottom, left, right등 순서 무관함
  //       console.log(top);
  //       console.log(bottom);
  //       const isVisible = top < window.innerHeight && bottom >= 0;
  //       console.log("innerHeight : ",window.innerHeight);
  //       setTokenServiceVisible(isVisible);
  //       console.log("TokenServices is visible:", isVisible);
  //     }
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }; // 컴포넌트가 언마운트 될때 클린업 함수로 return문 뒤에 써주기 언마운트 : 페이지 리다이렉션 or 조건부 렌더링에서 false시
  // }, []);
  
  // useEffect(() => {
  //   const handleScroll2 = () => {
  //     if (tokenAboutRef.current) {
  //       console.log(tokenAboutRef.current); // <div>..content..</div>
  //       // 현재 viewport에 포함되어 있는지 확인
  //       const { top, bottom } = tokenAboutRef.current.getBoundingClientRect();
  //       //이 구조분해에서는 이름으로 변수 할당하기 때문에 top, bottom, left, right등 순서 무관함
  //       console.log(top);
  //       console.log(bottom);
  //       const isVisible = top < window.innerHeight && bottom >= 0;
  //       console.log("innerHeight : ",window.innerHeight);
  //       setTokenAboutVisible(isVisible);
  //       console.log("TokenAbout is visible:", isVisible);
  //     }
  //   };
  
  //   window.addEventListener("scroll", handleScroll2);
  
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll2);
  //   }; // 컴포넌트가 언마운트 될때 클린업 함수로 return문 뒤에 써주기 언마운트 : 페이지 리다이렉션 or 조건부 렌더링에서 false시
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 첫 번째 요소: tokenServiceRef 확인
      if (tokenServiceRef.current) {
        const { top: serviceTop, bottom: serviceBottom } = tokenServiceRef.current.getBoundingClientRect();
        const serviceIsVisible = serviceTop < window.innerHeight && serviceBottom >= 0;
        setTokenServiceVisible(serviceIsVisible);
        console.log("TokenServices is visible:", serviceIsVisible);
      }
  
      // 두 번째 요소: tokenAboutRef 확인
      if (tokenAboutRef.current) {
        const { top: aboutTop, bottom: aboutBottom } = tokenAboutRef.current.getBoundingClientRect();
        const aboutIsVisible = aboutTop < window.innerHeight && aboutBottom >= 0;
        setTokenAboutVisible(aboutIsVisible);
        console.log("TokenAbout is visible:", aboutIsVisible);
      }
    };
  
    // 하나의 스크롤 이벤트 리스너로 관리
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll); // 언마운트 시 리스너 해제
    };
  }, []); // 의존성 배열이 비어 있으므로 컴포넌트가 처음 마운트될 때 한 번만 실행
  
  

  
  const options: ISourceOptions = useMemo(() => ({
    background: {
      color: { value: "#0C0E27" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 0 }, //클릭했을 떄 입자 수 증가
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: { default: OutMode.out },
        speed: 6,
      },
      number: { density: { enable: true }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }), []);

  // 로딩 스피너 및 tsParticles 렌더링
  if (showSpinner || !init) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "100%", 
        height: "100vh", 
        backgroundColor: "#0C0E27", // 배경색 추가
      }}>
        <BeatLoader size={20} color={"#ffffff"} />
      </div>
    );
  }

  return (
    <>
    <div>
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
    <>
    <motion.div
    initial="hidden"
    animate="visible"
    variants={headerInVariants}
    >
      <Header
        tokenHomeRef={tokenHomeRef}
        tokenAboutRef={tokenAboutRef}
        tokenRoadmapRef={tokenRoadmapRef}
        tokenServiceRef={tokenServiceRef}/>
    </motion.div>


    <motion.div
    initial="hidden"
    animate="visible"
    variants={tokenExInVariants}
    ref={tokenHomeRef}
    >
      <TokenEx/> 
    </motion.div>


    <motion.div
    initial="hidden"
    animate={tokenServiceVisible ? "visible" : "hidden"}
    variants={ServicesInVariants}
    ref={tokenServiceRef}
    >
      <Service/>
    </motion.div>


    <motion.div
    initial="hidden"
    animate={tokenAboutVisible ? "visible" : "hidden"}
    variants={ServicesInVariants}
    ref={tokenAboutRef}
    >
      <About/>
    </motion.div>
    </>
    {/* <Footer /> */}
    
    </div>
    
    </>
  );
};

export default App;
