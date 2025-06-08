import { Calendar } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router";
import FeaturesNavbar from "./FeaturesNavbar";
import NavigationGroup from "./NavigationGroup";
import AllDays from "./AllDays";

const Navbar = () => {
  const [isActiveBtn, setIsActiveBtn] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-1/2 z-999 flex w-full -translate-x-1/2 items-center justify-between rounded-b-2xl bg-slate-800 px-[3%] py-4 sm:w-10/12 sm:py-3">
      <div className="flex items-end text-white">
        <h3 className="text-xl font-semibold">
          <Link to="/">Wibuku</Link>
        </h3>
        <ul
          className={`${isActiveBtn && "top-13.5 opacity-100"} absolute -top-200 left-0 z-3 flex w-full flex-col bg-slate-800 py-4 text-slate-400 opacity-0 transition-all duration-800`}
        >
          <NavigationGroup />
          <div className="group relative">
            <li
              className={`flex w-full items-center gap-6 px-10 py-3 text-slate-600 transition-all duration-400 hover:bg-indigo-500 hover:text-white`}
            >
              <Calendar size={25} /> Schedule
            </li>
            <AllDays />
          </div>
        </ul>
      </div>
      <FeaturesNavbar
        isActiveBtn={isActiveBtn}
        setIsActiveBtn={setIsActiveBtn}
      />
    </nav>
  );
};

export default Navbar;
