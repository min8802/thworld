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
import TokenEx2 from "./components/TokenEx2";
import TokenUtility from "./components/TokenUtility";
import TokenAllocation from "./components/TokenAllocation";
import TokenRoadMap from "./components/TokenRoadMap";
import Footer from "./components/Footer";

const headerInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const tokenExInVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: -40, transition: { duration: 1.2, delay: 0.5 } },
};
//opacity 는 투명도
//y는 hidden 시작점이 0이고 visible -50이니까 위로 50 만큼 이동

const App = () => {
  const [init, setInit] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);

  const tokenExRef = useRef<HTMLDivElement>(null);
  const tokenAdRef = useRef<HTMLDivElement>(null);
  const tokenUtilRef = useRef<HTMLDivElement>(null);
  const tokenRoadmapRef = useRef<HTMLDivElement>(null);

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

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

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
        push: { quantity: 4 },
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
    <div style={{"background" : "green"}}>
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
      <Header tokenExRef={tokenExRef}
        tokenUtilRef={tokenUtilRef}
        tokenRoadmapRef={tokenRoadmapRef}
        tokenAdRef={tokenAdRef}/>
    </motion.div>
    <motion.div
    initial="hidden"
    animate="visible"
    variants={tokenExInVariants}>
    <div ref={tokenExRef}>
      <TokenEx/>
    </div>
    </motion.div>
    <div ref={tokenAdRef}>
      <TokenEx2 />
    </div>
    <div ref={tokenUtilRef}>
      <TokenUtility />
    </div>
    <TokenAllocation/>
    <div ref={tokenRoadmapRef}>
      <TokenRoadMap />
    </div>
    </>
    <Footer />
    </div>
    </>
  );
};

export default App;
