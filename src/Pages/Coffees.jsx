// import React from 'react'

import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { useState } from "react";

export default function Coffees() {
  const coffees = useLoaderData();
  //   console.log(coffees)

  const [coffeeSort, setCoffeeSort] = useState(coffees);
  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      const sorted = [...coffees].sort((a, b) => b.popularity - a.popularity);
      setCoffeeSort(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...coffees].sort((a, b) => b.rating - a.rating);
      setCoffeeSort(sorted);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mt-6">
        <div>
          <h1 className="text-3xl font-thin">
            Sort coffee's by Popularity & Rating-&gt;
          </h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => {
              handleSort("rating");
            }}
            className="btn btn-warning bg-[#881337] border-none text-white"
          >
            Sort By Rating
          </button>
          <button
            onClick={() => {
              handleSort("popularity");
            }}
            className="btn btn-warning bg-[#881337] border-none text-white"
          >
            Sort By Popularity
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {coffeeSort.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
}
