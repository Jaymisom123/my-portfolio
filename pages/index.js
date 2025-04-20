import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants"

const Home = () => {
  return <div className="bg-primary/60 h-full  ">
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 mt-0">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
      <h2 
          variants={fadeIn('down', 0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className="h2 font-sans text-gray-400 font-bold mb-0 mt-0">
        Jayme Rêgo <br/> 
          
        </h2>
        <motion.h2 
          variants={fadeIn('down', 0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className="h2 mb-1">
          Turning Ideas Into Stunning <br/> 
          <span className="text-accent"> Digital Experiences</span>
        </motion.h2>
        <motion.p 
           variants={fadeIn('down', 0.3)} 
           initial='hidden' 
           animate='show' 
           exit='hidden'
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-5">
         Welcome to my digital universe — where creativity meets technology to bring unique projects to 
         life. Explore my portfolio and discover how ideas evolve into engaging experiences. Let’s build something extraordinary together!
        </motion.p>
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className="hidden xl:flex"
          >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      <ParticlesContainer />
      <motion.div 
        className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        variants={fadeIn('up', 0.5)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        transition={{duration: 1, ease:'easeInOut'}}
        >  
        <Avatar />
      </motion.div>
    </div>
    
  </div>;
};

export default Home;
