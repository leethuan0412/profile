import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiFlutter,
  SiRedux,
  SiSocketdotio,
  SiReactquery,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/tabs";
import { ScrollArea } from "@/src/components/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/tooltip";

const Resume = () => {
  const about = {
    title: "About me",
    description: "ehfu ewhfuhewfheiuhfiwue",
    infor: [
      {
        fieldlName: "Name",
        fieldValue: "Thuan Le",
      },
      {
        fieldlName: "Email",
        fieldValue: "leducthuan0412@gmail.com",
      },
      {
        fieldlName: "Phone Number",
        fieldValue: "(+84) 973708653",
      },
      {
        fieldlName: "Experience",
        fieldValue: "3+ year",
      },
      {
        fieldlName: "Name",
        fieldValue: "Thuan Le",
      },
    ],
  };

  const experience = {
    icon: "/assets/svg/badge.svg",
    title: "My experience",
    description: " fehfijwfi jeowijfieojowjfoiejwo",
    items: [
      {
        company: "Blockodyssey viet nam company limited",
        possition: "Developer ",
        duration: "3/2023 - Present",
      },
      {
        company: "Adamo digital company limited",
        possition: " Developer ",
        duration: "11/2021 - 2/2023",
      },
      {
        company: "H&L consulting joint stock company",
        possition: "Intern",
        duration: "6/2021 - 10/2021",
      },
    ],
  };
  const education = {
    icon: "/assets/svg/cap.svg",
    title: "My education",
    description: " fehfijwfi jeowijfieojowjfoiejwo",
    items: [
      {
        institution: "HANOI UNIVERSITY OF INDUSTRY",
        degree: "Engineer",
        major: "Computer engineering",
        duration: "8/2018 - 4/2022",
      },
    ],
  };
  const skills = {
    title: "My skills",
    description: " fehfijwfi jeowijfieojowjfoiejwo",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "Html",
      },
      {
        icon: <FaCss3 />,
        name: "Css",
      },
      {
        icon: <FaJs />,
        name: "Javascipt",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <FaReact />,
        name: "React Native",
      },
      {
        icon: <SiFlutter />,
        name: "Flutter",
      },
      {
        icon: <GrGraphQl />,
        name: "GraphQL",
      },
      {
        icon: <SiRedux />,
        name: "Redux",
      },
      {
        icon: <FaGithub />,
        name: "GitHub",
      },
      {
        icon: <SiSocketdotio />,
        name: "Socket",
      },
      {
        icon: <RiNextjsFill />,
        name: "Nextjs",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] mb-6 text-center ">
                            {item.possition}
                          </h3>
                          <div className="flex items-center ">
                            <p className="text-white/60 text-center">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] mb-6 text-center ">
                            {item.major}
                          </h3>
                          <div className="flex items-center ">
                            <p className="text-white/60 text-center">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
                    {skills.description}
                  </p> */}
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 xl:gap-[30px] gap-2">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="h-[100px] w-full  bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className=" capitalize ">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p> */}
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620ox] mx-auto xl:mx-0">
                  {about.infor.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center xl:justify-start gap-4 items-center"
                      >
                        <span className="text-white/60">
                          {item.fieldlName}:
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
