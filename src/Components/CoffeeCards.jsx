import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

export default function CoffeeCards() {
  const { category } = useParams();
  //   console.log(category);

  const coffees = useLoaderData();

  const [coffeesCategory, setCoffeesCategory] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...coffees].filter(
        (filteredCoffee) => filteredCoffee.category === category
      );
      setCoffeesCategory(filteredByCategory);
      // console.log(coffeeByCategory)
      // console.log(filteredByCategory)
    } else {
      setCoffeesCategory(coffees.slice(0, 6));
    }
  }, [coffees, category]);
  console.log(coffeesCategory);

  //   const handleViewAll = () => {
  //     setCoffeesCategory(coffees)
  //   }

  const navigate = useNavigate();
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {coffeesCategory.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button
        className="btn bg-[#881337] text-white border-none"
        // onClick={handleViewAll}
        onClick={() => navigate('/coffees')}
      >
        View All
      </button>
      {/* <Link to={'/coffees'}>View All</Link> */}
    </div>
  );
}
