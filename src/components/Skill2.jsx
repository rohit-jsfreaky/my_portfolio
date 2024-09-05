import React, { useEffect } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";



const ServiceCard = ({ index, name, icon }) => {
    
    useEffect(()=>{
        console.log(name);
    })

    return (
      <Tilt className="xs:w-[150px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card"
        >
          <div
            options={{
              max: 455,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[10px] py-3 px-6 min-h-[180px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={name} className="w-12 h-12 object-contain" />
            <h3 className="text-white text-[16px] font-bold text-center">{name}</h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };
  

const Skill2 = () => {


  return (
    <>
      <motion.div variants={textVariant()} id="about">
        
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      

      <div className="mt-20 flex flex-wrap gap-10">
      {technologies.map((service,index)=>(
        <ServiceCard key={service.name} index={index} {...service}/>
      ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skill2,"skill2");
