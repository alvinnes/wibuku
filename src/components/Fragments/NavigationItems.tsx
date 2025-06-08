import { ReactNode } from "react";
import { NavLink } from "react-router";

interface NavigationItemProps {
  link: string;
  text: string;
  icon: ReactNode;
}

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

export default NavigationItem;
