import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from "../assets/nutrition.png";
import { addFavorite, getAllFavorites } from "../Utils";

export default function CoffeeDetails() {
  const coffees = useLoaderData();
  const { coffeeId } = useParams();
  // console.log(coffeeId)
  // console.log(coffees)
  
  const [coffee, setCoffee] = useState({});

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const singleCoffee = coffees.find((coffee) => coffee.id == coffeeId);
    setCoffee(singleCoffee);
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.id == singleCoffee.id)
    if(isExist) {
      setIsFavorite(true)
    }
  }, []);
  console.log(coffee);


  const handleFavorite = (coffee) => {
    addFavorite(coffee)
    // getAllFavorites()
    setIsFavorite(true)
  }
  
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-thin">{coffee.description}</h1>
      <img className="rounded-xl" src={coffee.image} alt="" />
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl mb-4">{coffee.name}</h3>
          <p>Popularity: {coffee.popularity}</p>
          <p>Rating: {coffee.rating}</p>
          {/* <p>Type: {coffee.type}</p>
        <p>Origin: {coffee.origin}</p> */}
        </div>
        <div>
          <button disabled={isFavorite} onClick={() => handleFavorite(coffee)} className="btn btn-warning bg-[#881337] border-none text-white">
            Add Favorite
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-2xl">Making Process: </h3>
        <p>{coffee.making_process}</p>
      </div>
      <div className="flex justify-between">
        <div>
          <div>
            <h3 className="text-2xl mt-8 mb-4">Ingredients: </h3>
            <ul className="list-disc ml-6">
              {coffee.ingredients?.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mt-8 mb-4">Nutrition: </h3>
            <ul className="list-disc ml-6">
              {coffee.nutrition_info &&
                Object.entries(coffee.nutrition_info).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}: </strong>
                    {value}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="w-[50%] h-fit">
          <img className="w-full" src={nutritionImg} alt="" />
        </div>
      </div>
    </div>
  );
}
