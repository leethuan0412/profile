import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const Services = () => {
  const dataServices = [
    {
      id: 1,
      title: "React Native Development",
      description:
        "Develop and maintain cross-platform mobile applications with React Native. Create and implement new features, optimize performance, and ensure maintainable code.",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Build and maintain modern websites using React.js and Next.js. Develop new features, optimize user experience, and manage clean code.",
    },
    {
      id: 3,
      title: "Flutter Development",
      description:
        "Develop mobile applications with Flutter, delivering stable performance on both iOS and Android. Design new features and ensure manageable code.",
    },
  ];
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20  ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {dataServices.map((item) => {
            return (
              <div key={item?.id} className="flex-1 flex flex-col gap-6 group">
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                    0{item?.id}
                  </div>
                  <Link
                    href={"/work"}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-primary text-2xl " />
                  </Link>
                </div>
                <h2 className="sm:text-[35px]  text-[25px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {item?.title}
                </h2>
                <p className="text-white/60">{item.description}</p>

                <div className="border-b border-white/20 w-full "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
