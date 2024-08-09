import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Input } from "@/src/components/input";
import { Textarea } from "@/src/components/textarea";
import { Button } from "@/src/components/button";

const infor = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+84 0973708653",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email",
    description: "leducthuan0412@gmail.com",
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Ha Noi, Viet Nam",
  },
];

const ContactScreen = () => {
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
      className="py-6"
    >
      <div className="container mx-auto mt-10">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent ">
                Let&apos;s work together
              </h3>
              <p>please endter all field</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Textarea
                className="h-[200px] "
                placeholder="Type your message here..."
              />
              <Button className="max-w-40">Send</Button>
            </form>
          </div>
          <div className="flex-1 flex  xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {infor.map((item) => {
                return (
                  <li
                    key={item?.id.toString()}
                    className="flex items-center gap-6 "
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                      <div className="text-[28px">{item?.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item?.title}</p>
                      <h3 className="text-xl">{item?.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ContactScreen;
