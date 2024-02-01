import { useEffect, useState } from "react";
import Navbar12 from "./Navbar12";
import { useSelector } from "react-redux";
import UserPageSlider from "./compo/PrevSlide";
import { useUserContext } from "@/context/Context";
import Navbar1234 from "./Navbar1234";
import NavbarContext from "./Navbar12";
// import { useUserContext } from "@/context/Context";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div>
        {isClient && <NavbarContext />} // context use
        {/* {isClient && <Navbarredux />} */} // redux use
        <div className="flex justify-center pt-10">
          <h1 className="font-bold text-2xl">Home Page </h1>
          {/* <h1>{users?.name}</h1> */}
        </div>
        <UserPageSlider />
      </div>
    </>
  );
}
