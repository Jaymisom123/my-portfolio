'use client'

import React,{useState} from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase, FaFigma, FaPython, FaEthereum } from 'react-icons/fa'
import { SiNextdotjs, SiAdobexd , SiAdobephotoshop, SiPostgresql, SiMongodb, SiFirebase, SiSequelize, SiMongoose, SiDjango, SiFlask } from 'react-icons/si'
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNode />,
          <FaEthereum />,
          <FaPython />,
          <SiDjango />,
          <SiFlask />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Database Design',
        icons: [
          <FaDatabase />,
          <SiPostgresql />,
          <SiMongodb />,
          <SiFirebase />,
          <SiSequelize />,
          <SiMongoose />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Burger joint - Final Project ',
        stage: '2024',
      },
      {
        title: 'Sulla jeans - Individual Project ',
        stage: '202',
      },
      {
        title: 'Cafeteria Web Developement - CoderHouse',
        stage: '2023',
      },
      {
        title: 'Final Project Javascript - CoderHouse',
        stage: '2022',
      },
      {
        title: 'Final Project React Js - CoderHouse',
        stage: '2022',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - CoderHouse',
        stage: '2022',
      },
      {
        title: 'Javascript - CoderHouse',
        stage: '2022',
      },
      {
        title: 'React Js - CoderHouse',
        stage: '2022',
      },
      {
        title: 'FullStack Web Developer - Dev club',
        stage: '2023',
      },
    ],
  },
];

import Circles from "../../components/Circles";
import {motion} from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:texr-left">
      <Circles />
      
      <motion.div 
        variants={fadeIn('right',0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        className="hidden xl:flex absolute bottom-0 -left-[230px]">
      
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
             variants={fadeIn('right',0.2)} 
             initial="hidden" 
             animate="show" 
             exit="hidden" 
             className="h2"
          >Captivating<span className="text-accent"> stories</span> birth magnificient designs.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right',0.4)}
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
            2 years ago I started my journey as a fullstack developer. I worked on a few projects and learned a lot about the industry.
          </motion.p>
          <motion.div 
            variants={fadeIn('right',0.6)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="hidden md:flex md:max-x-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div>
              <div className="reltive flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end ={2} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          variants={fadeIn('left',0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className="flex- flex-col w-full xl:max-w-[48%] h-[480px]">
        </motion.div>
        <div>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick = {() => setIndex(itemIndex)}
            >{item.title}</div>;
            } )}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb:2 md:mb-0 ">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                  {item.icons?(item.icons.map((icon, iconIndex) => {
                    return <div key={iconIndex} className="text-2xl text-white">{icon}</div>;
                  })):null}
                  </div>
                  
             

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
