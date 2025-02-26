import { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import { getAllFavorites, removeFavorite } from "../Utils";
import Card from "../Components/Card";

export default function Dashboard() {
  const handleRemove = (id) => {
    removeFavorite(id)
    const favorites = getAllFavorites()
    setCoffees(favorites)
  }
  


  const [coffees, setCoffees] = useState([])
  useEffect(() => {
    const favorites = getAllFavorites()
    setCoffees(favorites)
  }
  , [])
  return (
    <div>
      <Heading title={'Welcome to Dashboard'} subTitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here'}></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              {coffees.map((coffee) => (
                <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>
              ))}
            </div>
      
    </div>
  )
}
