import SpotlightCard from "../UI/SpotlightCard/SpotlightCard";
import { DescriptionAnimeProps } from "./DescriptionAnime";

const DescriptionItem = (props: DescriptionAnimeProps) => {
  const { text, icon, value } = props;
  return (
    <SpotlightCard
      spotlightColor="rgba(200, 229, 255, 0.1)"
      className="mb-3 flex h-25 items-center gap-3 rounded-md border-t-10 border-solid border-indigo-400 bg-slate-800 px-4 transition-all duration-300 hover:scale-98"
    >
      {icon}
      <div className="flex flex-col">
        <p className="font-semibold">{text} </p>
        <p className="text-sm">{value}</p>
      </div>
    </SpotlightCard>
  );
};

export default DescriptionItem;
