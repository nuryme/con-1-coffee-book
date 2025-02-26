import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../Components/CoffeeCards";
import CoffeeDetails from "../Pages/CoffeeDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-600 text-4xl font-bold">Error! Page Not Found</p>
      </div>
    ),
    children: [
      {
        path: "/",
        // index: true,
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
            {
                path: '/',
                loader: () => fetch('../coffees.json'),
                element: <CoffeeCards></CoffeeCards>,
            },
            {
                path: '/category/:category',
                loader: () => fetch('../coffees.json'),
                element: <CoffeeCards></CoffeeCards>,
            }
        ]
      },
      {
        path: "/coffees",
        loader: () => fetch('../coffees.json'),
        element: <Coffees></Coffees>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/coffee/:coffeeId",
        loader: () => fetch(`../coffees.json`),
        element: <CoffeeDetails></CoffeeDetails>
      }
    ],
  },
]);

export default routes;
