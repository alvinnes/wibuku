import { DescriptionAnimeProps } from "./DescriptionAnime";
import DescriptionItem from "./DescriptionItem";
import {
  CalendarBlank,
  Clock,
  Heart,
  Leaf,
  Medal,
  UsersThree,
  Video,
} from "@phosphor-icons/react";

const DescriptionAllAnime = (props: DescriptionAnimeProps) => {
  const { detailAnim } = props;
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
      <DescriptionItem
        detailAnim={detailAnim}
        text="Rank"
        icon={<Medal size={35} />}
        value={`#${detailAnim?.rank}`}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Members"
        icon={<UsersThree size={35} />}
        value={detailAnim?.members.toLocaleString()}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Aired"
        icon={<CalendarBlank size={35} />}
        value={detailAnim?.aired.string}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Episodes"
        icon={<Video size={35} />}
        value={detailAnim?.episodes}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Duration"
        icon={<Clock size={35} />}
        value={detailAnim?.duration}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Popularity"
        icon={<Heart size={35} />}
        value={detailAnim?.popularity}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Year"
        icon={<CalendarBlank size={35} />}
        value={detailAnim?.year}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Season"
        icon={<Leaf size={35} />}
        value={detailAnim?.season}
      />
    </div>
  );
};

export default DescriptionAllAnime;
