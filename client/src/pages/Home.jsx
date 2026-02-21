import React from "react";
import Header from "../components/Header";
import NextDestination from "../components/NextDestination";
import WhyChooseUs from "../components/WhyChooseUs";
import TravelStories from "../components/TravelStories";

const Home = () => {
  return (
    <div>
      <Header />
      <NextDestination/>
      <WhyChooseUs/>
      <TravelStories/>
    </div>
  );
};

export default Home;
