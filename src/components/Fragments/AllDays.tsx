import DayItem from "./DayItem";

const AllDays = () => {
  return (
    <div className="invisible absolute -mt-10 ml-18 flex w-50 flex-col overflow-hidden rounded-xl bg-slate-700 opacity-0 shadow-md transition-all duration-500 group-hover:visible group-hover:mt-2 group-hover:opacity-100 sm:ml-48 sm:group-hover:-mt-10">
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

export default AllDays;
