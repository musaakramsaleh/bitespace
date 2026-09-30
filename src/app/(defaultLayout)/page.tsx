import React from "react";
import Banner from "@/components/home/Banner";
import Partner from "@/components/home/Partner";
import Discover from "@/components/home/Discover";
import Professional from "@/components/home/Professional";
import Potential from "@/components/home/Potential";
import Community from "@/components/home/Community";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Partner />
      <Discover />
      <Professional />
      <Potential />
      <Community/>
    </>
  );
};

export default HomePage;
