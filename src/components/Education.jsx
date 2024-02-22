import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EducationList } from "../constants/Education.js";

const Education = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);

    const variants1 = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    };

    const educationElements = EducationList.map((edu, i) => {    
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={edu.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
              width: "60px",
              height: "60px",
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
            }}
            icon={<img src={edu.img} />}
            key={i}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" ,color: "#000" ,fontWeight: "bold"  }}
            >
              {edu.degree}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle font-semibold"
              style={{ textAlign: "left", color: "#000" }}
            >
              {edu.university}
            </h4>
            <div style={{ textAlign: "left", marginTop: "5px",color: "#000" }}>{edu.gpa}</div>
            {/* <div style={{ textAlign: "left", marginTop: "5px",color: "#000" }}>{work.description}</div> */}
            <ul className="text-black">
                {edu.description.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </ul>
          </VerticalTimelineElement>
        );
      });

    return (
        <section className=" sm:px-8 py-[80px]" id="education">
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Education
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="col-md-8 mx-auto text-white">
                <VerticalTimeline>{educationElements}</VerticalTimeline>
            </div>
            
        </section>
    );
};
  
  export default Education;
