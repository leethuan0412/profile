import React from "react";
import { Button } from "@/src/components/button";
import { FiDownload } from "react-icons/fi";
import Socials from "../../components/socials";
import Avatar from "../../components/avatar";
import Stats from "@/src/components/stats";

const HomePage = () => {
  return (
    <section className="h-full flex-col flex mb-20">
      <div className="container mx-auto h-full">
        <div className="flex flex-col sm:flex-row items-center justify-between sm:pt-8 sm:pb-24">
          <div className="text-center sm:text-left order-2 sm:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h2  mb-6">
              Hello I&apos;m <br />
              <span className="h1 text-accent">Thuan Le</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              Are you looking for a professional React Native developer to help
              turn your mobile app idea into reality? Look no further! Contact
              me so we can discuss the project further. I look forward to
              working with you and your esteemed company.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a href="/LeVanThuan_ReactNative.pdf" target="_blank">
                <div className=" flex items-center gap-2 border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary py-2 px-4 rounded-full">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </div>
              </a>
              <div className="mb-8 sm:mb-0">
                <Socials
                  containerStyles={"flex gap-6 "}
                  iconStyles={
                    "h-9 w-9 border border-accent rounded-full flex justify-center items-center  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 sm:order-none sm:my-0 my-8">
            <Avatar />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default HomePage;
