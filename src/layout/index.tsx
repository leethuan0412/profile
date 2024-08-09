import React, { PropsWithChildren } from "react";
import Header from "../components/header";
import PageTransition from "../components/page-transition";
import StairEffect from "../components/stair-effect";
const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <StairEffect />
      <PageTransition />
      <div
      // className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col"
      // style={{ backgroundImage: "url(/backround.png)" }}
      >
        {children}
      </div>
    </div>
  );
};
export default RootLayout;
