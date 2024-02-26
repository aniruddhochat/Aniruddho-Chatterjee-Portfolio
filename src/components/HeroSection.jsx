import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { LinkedIn,Github,Email } from "../constants/Skills";
import {
    Link as ScrollLink,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";
import { Suspense } from "react";
import Loading from "./Loading";

const HeroSection = () => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent, { once: true });

    return (
        <>
            <section
                className="sm:px-8 overflow-hidden pb-8 pt-[110px] sm:pt-[120px] sm:pb-10"
                id="intro"
            >
                <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center">
                    {/* intro section */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={
                            inViewContent
                                ? { opacity: 1, x: 0, scale: 1 }
                                : { opacity: 0, x: -100, scale: 0.8 }
                        }
                        transition={{ duration: 0.8 }}
                        className="flex-col col-span-9 order-2 mt-4 "
                    >
                        <h1 className="text-white mb-4 text-2xl sm:text-1xl md:text-2xl lg:text-3xl font-[500] lg:leading-normal">
                            Hello World, I&apos;m{" "}
                            <span className="text-heading">Aniruddho Chatterjee</span>{" "}
                            <br/>
                            {/* <span className="text-heading">I am a</span>{" "} */}
                            I am a {" "}
                            <span className="text-heading">
                                <TypeAnimation
                                    sequence={[
                                        1000,
                                        "Senior Software Developer",
                                        500,
                                        "Senior Technical Consultant",
                                        500,
                                        "Cloud Solution Architect",
                                        500,
                                        "Data Scientist",
                                        500,
                                    ]}
                                    speed={50}
                                    // style={{ fontSize: "10px" }}
                                    //className="text-lg md:text-3xl font-[500]"
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
{/* 
                        <TypeAnimation
                            // preRenderFirstString={true}
                            sequence={[
                                1000,
                                "I build scalable and efficient solutions.",
                                500,
                                "Bringing ideas to life with code.",
                                500,
                                "Continuous learner in the ever-evolving tech world.",
                                500,
                                "Let's collaborate and innovate together!",
                                500,
                            ]}
                            speed={50}
                            // style={{ fontSize: "10px" }}
                            className="text-lg md:text-3xl font-[500]"
                            repeat={Infinity}
                        /> */}

                        <p className="text-textPara font-[500] text-white text-base text-lg sm:text-lg mb-4 mt-3 lg:text-2xl">
                            I build scalable and efficient solutions bringing ideas to life with code.
                            <br/>
                            Continuous learner in the ever-evolving tech world.
                        </p>
                        <div className="flex items-center gap-4 flex-col sm:flex-row ">
                            <a
                                href="https://drive.google.com/file/d/1vB6QKgFLoDzsxBmv7cz3GB5kf9cpL4vZ/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 cursor-pointer w-full sm:w-fit rounded-full md:mr-4 bg-white hover:bg-gray-300 text-black text-lg font-[700] text-center hover:scale-[0.99] transition-all duration-400 ease-in-out "
                            >
                                View Resume
                            </a>
                        </div>
                        <div className="inline-flex items-center flex-xl-row sm:flex-row">
                            <span className="px-2 py-3 w-full sm:w-fit rounded-full md:mr-4 bg-transparent  text-white text-center hover:bg-darkHover hover:scale-[0.99] transition-all duration-400 ease-in-out ">
                                <a
                                    href="https://www.linkedin.com/in/aniruddho-chatterjee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    alt="LinkedIn"
                                >
                                    {/* <linkedin/> */}
                                    {LinkedIn.map(
                                        (skill, i) => {
                                        return (
                                            <img
                                            src={skill.img}
                                            alt={skill.description}
                                        />
                                        )}
                                    )}
                                </a>
                            </span>
                            <span className="px-2 py-3 w-full sm:w-fit rounded-full md:mr-4 bg-transparent text-white text-center hover:bg-darkHover hover:scale-[0.99] transition-all duration-400 ease-in-out ">
                                <a
                                    href="https://github.com/aniruddhochat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <BsGithub /> */}
                                    {Github.map(
                                        (skill, i) => {
                                        return (
                                            <img
                                            src={skill.img}
                                            alt={skill.description}
                                        />
                                        )}
                                    )}
                                </a>
                            </span>
                        </div>
                    </motion.div>
                    {/* image section */}
                    <motion.div
                        ref={refContent}
                        initial={{
                            opacity: 0,
                            x: 100,
                            scale: 0.8,
                            filter: "blur(6px)",
                        }}
                        animate={
                            inViewContent
                                ? {
                                      opacity: 1,
                                      x: 0,
                                      scale: 1,
                                      filter: "blur(0px)",
                                  }
                                : { opacity: 0, x: 100, scale: 0.8 }
                        }
                        transition={{ duration: 0.8 }}
                        className="col-span-3 w-full h-[200px] lg:w-[400px] lg:h-[400px] relative mt-16 sm:-mt-4"
                    >
                        <Suspense fallback={<Loading />}>
                            <img
                                src="/images/heroImg2.png"
                                alt="Meme Icon"
                                loading="lazy"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
                            />
                        </Suspense>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
