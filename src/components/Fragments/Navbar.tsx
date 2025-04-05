import {
  Bookmark,
  Calendar,
  Clock,
  Heart,
  House,
  MagnifyingGlass,
  Queue,
  Tag,
  TextAlignRight,
  X,
} from "@phosphor-icons/react";
import {
  Dispatch,
  KeyboardEventHandler,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Link, NavLink, useNavigate } from "react-router";

interface NavigationItemProps {
  link: string;
  text: string;
  icon: ReactNode;
}

const Navbar = () => {
  const [isActiveBtn, setIsActiveBtn] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-1/2 z-999 flex w-full -translate-x-1/2 items-center justify-between rounded-b-2xl bg-slate-800 px-[3%] py-4 sm:py-3 sm:w-10/12">
      <div className="flex items-end text-white">
        <h3 className="text-xl font-semibold">
          <Link to="/">Wibuku</Link>
        </h3>
        <ul
          className={`${isActiveBtn && "top-13.5 opacity-100"} absolute -top-200 left-0 -z-1 flex w-full flex-col bg-slate-800 py-4 text-slate-400 opacity-0 transition-all duration-1000`}
        >
          <NavigationItem text="Home" link="/" icon={<House size={25} />} />
          <NavigationItem
            text="Ongoing Anime"
            link="/allOngoing"
            icon={<Clock size={25} />}
          />
          <NavigationItem
            text="List Anime"
            link="/listAnime"
            icon={<Queue size={25} />}
          />
          <NavigationItem
            text="Genres"
            link="/genres"
            icon={<Tag size={25} />}
          />
          <div className="group relative">
            <NavigationItem
              text="Schedule"
              link="/ongoing"
              icon={<Calendar size={25} />}
            />
            <AllDays />
          </div>
          <NavigationItem
            text="Popular Anime"
            link="/popular"
            icon={<Heart size={25} />}
          />
          <NavigationItem
            text="Bookmark"
            link="/bookmark"
            icon={<Bookmark size={25} />}
          />
        </ul>
      </div>
      <FeaturesNavbar
        isActiveBtn={isActiveBtn}
        setIsActiveBtn={setIsActiveBtn}
      />
    </nav>
  );
};

interface FeaturesNavbarProps {
  isActiveBtn: boolean;
  setIsActiveBtn: Dispatch<SetStateAction<boolean>>;
}

const FeaturesNavbar = (props: FeaturesNavbarProps) => {
  const { isActiveBtn, setIsActiveBtn } = props;
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleValueSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key == "Enter" && valueSearch.trim() != "") {
      navigate(`/result/${valueSearch}`);
      scrollTo({ behavior: "smooth", top: 0 });
    }
  };

  const handleIsActiveBtn = () => {
    setIsActiveBtn(!isActiveBtn);
  };

  const handleShowInput = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${isClicked && "left-1/2 opacity-100"} absolute top-14.5 -left-full flex w-11/12 -translate-x-1/2 rounded-md bg-slate-700 text-white opacity-0 transition-all duration-500 hover:ring-2 hover:ring-slate-400/50 sm:static sm:w-sm sm:opacity-100`}
      >
        <input
          type="text"
          placeholder="search anime here"
          className="w-full p-2.5 text-sm outline-0"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          onKeyDown={(e) => handleValueSearch(e)}
        />
        <span className="absolute top-1/2 right-2 hidden -translate-y-1/2 cursor-pointer text-white sm:block">
          <MagnifyingGlass size={23} />
        </span>
      </div>
      <span
        className="absolute right-12 cursor-pointer text-white sm:hidden"
        onClick={handleShowInput}
      >
        <MagnifyingGlass size={23} />
      </span>
      <span className="cursor-pointer text-white text-3xl" onClick={handleIsActiveBtn}>
        {isActiveBtn ? <X /> : <TextAlignRight />}
      </span>
    </div>
  );
};

const NavigationItem = (props: NavigationItemProps) => {
  const { link, text, icon } = props;

  return (
    <NavLink to={link}>
      {({ isActive }) => (
        <li
          className={`${isActive ? "bg-indigo-500 text-white" : "text-slate-600"} flex w-full items-center gap-6 px-10 py-3 transition-all duration-400 hover:bg-indigo-500 hover:text-white`}
        >
          {icon} {text}
        </li>
      )}
    </NavLink>
  );
};

interface DayItemProps {
  day: string;
  link: string;
}

const AllDays = () => {
  return (
    <div className="invisible absolute -mt-10 ml-18 flex w-50 flex-col overflow-hidden rounded-xl bg-slate-700 opacity-0 shadow-md transition-all duration-500 group-hover:visible sm:group-hover:-mt-10 group-hover:mt-2 group-hover:opacity-100 sm:ml-48">
      <DayItem link="/ongoing/monday" day="Monday" />
      <DayItem link="/ongoing/tuesday" day="Tuesday" />
      <DayItem link="/ongoing/wednesday" day="Wednesday" />
      <DayItem link="/ongoing/thursday" day="Thursday" />
      <DayItem link="/ongoing/friday" day="Friday" />
      <DayItem link="/ongoing/saturday" day="Saturday" />
      <DayItem link="/ongoing/sunday" day="Sunday" />
    </div>
  );
};

const DayItem = (props: DayItemProps) => {
  const { day, link } = props;
  return (
    <Link
      to={link}
      className="border-b-1 border-solid border-slate-500 py-2 pl-4 text-white transition-all duration-300 hover:bg-indigo-500"
    >
      {day}
    </Link>
  );
};

export default Navbar;
