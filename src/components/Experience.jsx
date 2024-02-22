import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExperienceList } from "../constants/Experience";

const Experience = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);

    const variants1 = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    };

    const experienceElements = ExperienceList.map((work, i) => {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;
    
        // const mainTech = mainTechnologies.map((technology, i) => (
        //   <Badge pill className="main-badge mr-2 mb-2" key={i}>
        //     {technology}
        //   </Badge>
        // ));
    
        const tech = technologies.map((technology, i) => (
          <Badge pill className="experience-badge mr-4 mb-2 inline-block" key={i}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                key={i}
                className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
            >
                <img
                    src={technology.img}
                    alt={technology.description}
                />
                {/* <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-textWhite rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-1 opacity-0 mx-auto px-2 w-max">
                    {technology.description}
                </span> */}
                <span className=" text-sm text-black rounded-md mt-2 px-2 w-max">
                    {technology.description}
                </span>
            </motion.div>
          </Badge>
        ));
    
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<img src={work.img}/>}
            key={i}
          >
            {/* <div style={{ textAlign: "left", marginBottom: "4px",color: "#000" }}>
              {mainTech}
            </div> */}
            <h3
              className="vertical-timeline-element-title font-bold"
              style={{ textAlign: "left" ,color: "#000" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle font-semibold"
              style={{ textAlign: "left", color: "#000" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "5px",color: "#000" }}>{tech}</div>
            {/* <div style={{ textAlign: "left", marginTop: "5px",color: "#000" }}>{work.description}</div> */}
            {/* <ul className="text-black">
                {work.description.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </ul> */}
          </VerticalTimelineElement>
        );
      });

    return (
        <section className=" sm:px-8 py-[80px]" id="experience">
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Experience
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            {/* Projects
            {ExperienceList?.map((project, i) => {
                return project.id % 2 === 0 ? (
                    <LeftView key={i} {...project} />
                ) : (
                    <RightView key={i} {...project} />
                );
            })} */}
            {/* <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                <h1 className="section-title" style={{ color: "black" }}>
                    <span className="text-black" style={{ textAlign: "center" }}>
                    {sectionName}
                    </span>
                </h1>
                </div>
            </div> */}

            <div className="col-md-8 mx-auto text-white">
                <VerticalTimeline>{experienceElements}</VerticalTimeline>
            </div>
            
        </section>
    );
};
  
  export default Experience;
