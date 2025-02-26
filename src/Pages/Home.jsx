// import React from 'react'

import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

export default function Home() {
  
    const categories = useLoaderData()
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browse coffees by category"}
        subTitle={
          "Choose your desired coffee category to browse through specific coffees that fit in yout taste"
        }
      ></Heading>
      {/* Categories tab section */}
      <Categories categories={categories}></Categories>
      {/* Dynamic nested components */}
      <Outlet></Outlet>
    </div>
  );
}
