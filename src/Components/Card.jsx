import { MdDeleteForever } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function Card({ coffee, handleRemove }) {
  const { pathname } = useLocation();

  // console.log(coffee)
  return (
    <div className="flex relative">
            <Link
        to={`/coffee/${coffee.id}`}
        className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-105 overflow-hidden transition"
      >
        <figure>
          <img src={coffee.image} alt="Shoes" />
        </figure>
        <div className="card-body gap-1">
          <h2 className="card-title">Name: {coffee.name}</h2>
          <p>Category: {coffee.category}</p>
          <p>Type: {coffee.type}</p>
          <p>Origin: {coffee.origin}</p>
          <p>Rating: {coffee.rating}</p>
          <p>Popularity: {coffee.popularity}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-[#881337] text-white border-none">
              Buy Now
            </button>
          </div>
        </div>
      </Link>
      
      {
        pathname === '/dashboard' && <MdDeleteForever onClick={() => handleRemove(coffee.id)} className="text-3xl text-orange-600 absolute -top-3 -right-3" />
      }

    </div>
  );
}
