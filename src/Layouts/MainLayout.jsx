import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ClockLoader } from "react-spinners";
import { Toaster } from 'react-hot-toast';

export default function MainLayout() {
  const navigation = useNavigation();
  return (
    <div>
      <Toaster></Toaster>
      {/* Navbar */}
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      {/* Dynamic section */}
      <div className="min-h-[calc(100vh-232px)] container mx-auto px-6 lg:px-12 mt-8">
        {navigation.state === "loading" ? (
          <div className="h-[calc(100vh-232px)] flex items-center justify-center">
            <ClockLoader  size={100} color="#881337" />
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
