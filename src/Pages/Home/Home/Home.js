import React from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Plan from "../Plan/Plan";
import Trips from "../Trips/Trips";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Plan></Plan>
      <Trips></Trips>
      <Blogs />
    </div>
  );
};

export default Home;
