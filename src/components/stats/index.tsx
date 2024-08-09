import React from "react";
import CountUp from "react-countup";
const Stats = () => {
  const dataStats = [
    {
      id: 1,
      num: 3,
      title: "Years of experience",
    },
    {
      id: 2,
      num: 12,
      title: "Project completed",
    },
    {
      id: 3,
      num: 11,
      title: "Technologies used",
    },
    {
      id: 4,
      num: 100,
      title: "Code commits",
    },
  ];

  return (
    <div className="pt-4 pb-12 sm:pt-0 sm:pb-0 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto sm:max-w-none ">
          {dataStats.map((item) => {
            return (
              <div
                className="flex-1 flex gap04 items-center justify-center sm:justify-start"
                key={item?.id}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl sm:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item?.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80  ml-1 `}
                >
                  {item?.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Stats;
