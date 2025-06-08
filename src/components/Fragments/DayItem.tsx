import { Link } from "react-router";

interface DayItemProps {
  day: string;
  link: string;
}

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

export default DayItem;
