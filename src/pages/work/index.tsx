import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/tooltip";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import "swiper/css";

import ImageProjectGoflzon from "@/src/assets/images/golfzon.png";
import ImageProjectSecretary from "@/src/assets/images/secretary.png";
import ImageProjectAllRound from "@/src/assets/images/allround.png";
import ImageProjectWallet from "@/src/assets/images/wallet.png";
import ImageProjectTPocs from "@/src/assets/images/TPCOS.png";
import ImageProjectTof from "@/src/assets/images/Tof.png";
import ImageProjectAllRoundWeb from "@/src/assets/images/allround-web.png";

import WorkSlide from "@/src/components/work-slide";

const dataProject = [
  {
    id: 1,
    category: "Golfzon Viet Nam",
    description:
      "Some main features of the application: Sign in, sign up,create booking, chat with admin , push notication, muti language, phone authentication, map view,code push, publish to store",
    tectnologies: "React Native, TypeScript, Redux, Firebase, Sentry, Socket.",
    image: ImageProjectGoflzon,
    live: "https://apps.apple.com/vn/app/golfzon-vietnam/id1660721166?l=vi",
  },
  {
    id: 2,
    category: "BO Wallet",
    description:
      "Some main features of the application: Sign in,sign up,transfer money, withdraw money, transaction history , KYC (verify card id, phone number), data encryption, push notification.",
    tectnologies:
      "TypeScript, PortOne , React Native, Redux, Firebase, GraphQL",
    image: ImageProjectWallet,
    live: "",
  },
  {
    id: 3,
    category: "Secretary Kim",
    description:
      "Some main features of the application: Sign-in social(Fb,Google,Apple), find secretary, chat, login biometrics, booking secretary, secretary detail,deeplink, share, push notification.",
    tectnologies: "TypeScript ,React Native, Redux, Firebase.",
    image: ImageProjectSecretary,
    live: "",
  },
  {
    id: 4,
    category: "AllRound",
    description:
      "Some main features of the application: Sign-in social(Fb,Google,Kakao), push notification, create event, search, post an article, favorite post, comment, subcomment. ",
    tectnologies: "TypeScript ,React Native, RTK Query, Firebase.",
    image: ImageProjectAllRound,
    live: "",
  },
  {
    id: 5,
    category: "TPCOS",
    description:
      "Some main features of the application: Sign in, sign up, product detail, cart, order, payment, publish app to store, push notification(Onesignal). ",
    tectnologies: "TypeScript ,React Native, Redux Saga, Onesignal.",
    image: ImageProjectTPocs,
    live: "",
  },
  {
    id: 6,
    category: "TOF",
    description:
      "Some main features of the application: Sign in with metamask, scan NFT, category, add and remove NFT, detail NFT. ",
    tectnologies: "TypeScript ,React Native, Redux, GraphQL.",
    image: ImageProjectTof,
    live: "",
  },
  {
    id: 7,
    category: "Web Allround",
    description:
      "Some main features of the application: Sign in (Google, Facebook, Kakao), create event, register dancer, register event, create crew, search.",
    tectnologies: "Nextjs ,React Query, Redux.",
    image: ImageProjectAllRoundWeb,
    live: "https://allround-mvp.services.approach.vn/",
  },
];

const Work = () => {
  const [project, setProject] = useState(dataProject[0]);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    setProject(dataProject[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              <div className="flex items-center justify-between ">
                <div className="text-6xl leading-none font-extrabold text-transparent text-outline ">
                  0{project.id}
                </div>
                <div className="gap-4 ">
                  <Link href={project.live} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group ">
                          {/* <a href={project.live} target="_blank"> */}
                          <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                          {/* </a> */}
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
              {/* project */}
              <div>
                <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize  ">
                  {project.category}
                </h2>
                <p className="text-white/60 py-2">{project.description}</p>
                <p className="text-base text-accent">{project.tectnologies}</p>

                {/* border */}
                <div className="border border-white/20 " />
                {/* button */}
                <div className="mt-10">{`Scroll image to view more project -->`}</div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              className="flex "
              onSlideChange={handleSlideChange}
            >
              {dataProject.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="xl:h-[360px] h-[300px] relative group flex justify-center items-center  ">
                      <div></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-contain xl:h-[360px] h-[300px]"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSlide
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                }
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary h-[35px] w-[35px] flex justify-center items-center transition-all "
                }
                iconStyles={""}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;
