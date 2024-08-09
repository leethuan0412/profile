import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: Props) => {
  const socilas = [
    { icon: <FaGithub />, path: "https://github.com/leethuan0412" },
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/%C4%91%E1%BB%A9c-thu%E1%BA%ADn-801136210/",
    },
    { icon: <FaFacebook />, path: "https://www.facebook.com/100018266132554" },
  ];

  return (
    <div className={containerStyles}>
      {socilas.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} passHref>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Socials;
