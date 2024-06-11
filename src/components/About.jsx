import { useState, useTransition, useRef, Suspense } from "react";
import TabbedComponent from "./TabbedComponent";
import { Cloud, Databases, Libraries, ProgLang, Tools, WebDev } from "../constants/Skills";
import { motion, useInView } from "framer-motion";
import Loading from "./Loading";

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const refHeading = useRef(null);
    const refContent = useRef(null);
    const inViewHeading = useInView(refHeading);
    const inViewContent = useInView(refContent, { once: true });

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }
    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section className=" sm:px-8 py-[80px] overflow-hidden" id="about">
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    About Me
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <motion.div
                    ref={refContent}
                    initial={{
                        opacity: 0,
                        x: -100,
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
                            : { opacity: 1, x: -100, scale: 0.8 }
                    }
                    transition={{ duration: 0.8 }}
                    className="flex-1 md:max-w-[40%] sm:mt-10 "
                >
                    <Suspense fallback={<Loading />}>
                        <img
                            src="/images/about.png"
                            alt="meme"
                            loading="lazy"
                            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] "
                        />
                    </Suspense>
                </motion.div>
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={
                        inViewContent
                            ? { opacity: 1, x: 0, scale: 1 }
                            : { opacity: 0, x: 100, scale: 0.8 }
                    }
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <p className="text-textWhite p-4 text-lg sm:text-xl sm:leading-7">
                        I recently graduated with a Masters degree in Computer Science from Indiana University Bloomington.
                        <br />
                        <br />
                        With a blend of academic excellence and corporate experience, I possess the right skill set and understanding to solve complex business problems and help organizations meet critical deadlines. 
                        <br />
                        <br />
                        If you're looking for a versatile, results-driven professional, let's connect and explore how I can contribute to your team's success.
                        <br/>
                        <br />
                        I am actively looking for full-time opportunities.
                    </p>

                    <div className="flex flex-row justify-start gap-6 pl-4">
                        <TabbedComponent
                            selectTab={() => selectTab("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills
                        </TabbedComponent>
                        {/* <TabbedComponent
                            selectTab={() => selectTab("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabbedComponent>
                        <TabbedComponent
                            selectTab={() => selectTab("work")}
                            active={tab === "work"}
                        >
                            {" "}
                            Work Experience{" "}
                        </TabbedComponent> */}
                    </div>
                    <div className="mt-8 pl-4 max-w-[100%] min-h-[140px] flex flex-wrap gap-x-10 gap-y-8">
                        {tab === "skills" ? (
                            /*{ ProgLang?.map((skill, i) => {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        key={i}
                                        className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                                        //className="group relative transition-all duration-500 ease-in-out cursor-pointer"
                                    >
                                        <img
                                            src={skill.img}
                                            alt={skill.description}
                                        />
                                        <span className="bg-gray-800 text-sm text-textWhite rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-1 opacity-100 mx-auto px-2 w-max">
                                            {skill.description}
                                        </span>
                                    </motion.div>
                                );
                            }) }*/
                                <div>
                                    <ul className="text-textWhite font-bold mb-4 text-lg sm:text-xl sm:leading-7">
                                        Programming Languages
                                    </ul>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        { ProgLang?.map((skill, i) => {
                                            return (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                    key={i}
                                                    className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                                                    //className="group relative transition-all duration-500 ease-in-out cursor-pointer"
                                                >
                                                    <div className="block flex-row align-items-center">
                                                        <img src={skill.img} alt={skill.description} />
                                                        <span className="bg-gray-800 text-sm text-textWhite rounded-md mt-2 px-2 w-max">
                                                            {skill.description}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                    <br/>
                                    <ul className="text-textWhite font-bold mt-4 mb-4 text-lg sm:text-xl sm:leading-7">
                                        Web Development
                                    </ul>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        { WebDev?.map((skill, i) => {
                                            return (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                    key={i}
                                                    className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                                                    //className="group relative transition-all duration-500 ease-in-out cursor-pointer"
                                                >
                                                    <div className="block flex-row items-center">
                                                        <img src={skill.img} alt={skill.description} />
                                                        <span className="bg-gray-800 text-sm text-textWhite rounded-md mt-2 px-2 w-max text-center">
                                                            {skill.description}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    <br/>
                                    <ul className="text-textWhite font-bold mt-4 mb-4 text-lg sm:text-xl sm:leading-7">
                                        Databases
                                    </ul>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        { Databases?.map((skill, i) => {
                                            return (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                    key={i}
                                                    className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer mb-4 md:mb-0"
                                                    //className="group relative transition-all duration-500 ease-in-out cursor-pointer"
                                                >

                                                    <div className="block flex-row items-center">
                                                        <img src={skill.img} alt={skill.description} />
                                                        <span className="bg-gray-800 text-sm text-textWhite rounded-md mt-2 px-2 w-max">
                                                            {skill.description}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    <br/>
                                    <ul className="text-textWhite font-bold mt-4 mb-4 text-lg sm:text-xl sm:leading-7">
                                        Tools & Frameworks
                                    </ul>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        { Tools?.map((skill, i) => {
                                            return (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                    key={i}
                                                    className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                                                    //className="group relative transition-all duration-500 ease-in-out cursor-pointer"
                                                >
                                                    <div className="block flex-row items-center">
                                                        <img src={skill.img} alt={skill.description} />
                                                        <span className="bg-gray-800 text-sm text-textWhite rounded-md mt-2 px-2 w-max">
                                                            {skill.description}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                    <br/>
                                    <ul className="text-textWhite font-bold mt-4 mb-4 text-lg sm:text-xl sm:leading-7">
                                        Libraries
                                    </ul>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        { Libraries?.map((skill, i) => {
                                            return (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                    key={i}
                                                    className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                                                    //className="group relative transition-all duration-500 ease-in-out cursor-pointer"
                                                >
                                                    <div className="block flex-row items-center">
                                                        <img src={skill.img} alt={skill.description} />
                                                        <span className="bg-gray-800 text-sm text-textWhite rounded-md mt-2 px-2 w-max">
                                                            {skill.description}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                    <br/>
                                    <ul className="text-textWhite font-bold mt-4 mb-4 text-lg sm:text-xl sm:leading-7">
                                        Cloud Technologies
                                    </ul>
                                    <div className="flex flex-col-2 md:flex-row gap-x-10">
                                        { Cloud?.map((skill, i) => {
                                            return (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                    key={i}
                                                    className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                                                    //className="group relative transition-all duration-500 ease-in-out cursor-pointer"
                                                >
                                                    <div className="block flex-row items-center">
                                                        <img src={skill.img} alt={skill.description} />
                                                        <span className="bg-gray-800 text-sm text-textWhite rounded-md mt-2 px-2 w-max">
                                                            {skill.description}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                        ) : tab === "education" ? (
                            <ul className="list-disc pl-2">
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Gautam Buddha University, Greater Noida
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                                Bachelor of Technology in
                                                Computer Science & Engineering
                                            </p>
                                            <span>2021-2025</span>
                                        </span>
                                    </div>
                                </motion.li>
                            </ul>
                        ) : (
                            <ul className="list-disc pl-2 flex flex-col gap-4">
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        SDE Intern{" "}
                                        <span className="text-base font-[500]">
                                            - FinGPT
                                        </span>
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                                Working on a trading platform
                                                for a stealth-mode startup based
                                                in California, USA. Integrating
                                                AI capabilities and enhancing
                                                user experience of the platform
                                                using Next.js, TypeScript,
                                                NextAuth, Tailwind CSS, React
                                                Query and Open AI.
                                            </p>
                                        </span>
                                    </div>
                                    <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                                        <span className="">
                                            Jan 2024 - Present
                                        </span>
                                        <span className="">Remote</span>
                                    </div>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Subject Matter Expert{" "}
                                        <span className="text-base font-[500]">
                                            - Chegg India
                                        </span>
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                                Working as a Subject Matter
                                                Expert in Computer Science
                                                domain, providing detailed
                                                explanations and mentoring
                                                support to students.
                                            </p>
                                        </span>
                                    </div>
                                    <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                                        <span className="">
                                            Oct 2023 - Present
                                        </span>
                                        <span className="">Remote</span>
                                    </div>
                                </motion.li>
                            </ul>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
