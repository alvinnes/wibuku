import { Clock, Star, ThumbsUp } from "@phosphor-icons/react";
import { DetailAnime } from "../../interfaces/IDetailAnime";

interface DescriptionDetailAnimeProps {
  detailAnime: DetailAnime;
}

const DescriptionDetailAnime = ({
  detailAnime,
}: DescriptionDetailAnimeProps) => {
  return (
    <div className="mb-3 flex items-center gap-4">
      <p className="flex items-center gap-1">
        <Star weight="bold" /> {detailAnime?.score}
      </p>
      <p className="flex items-center gap-1">
        <ThumbsUp weight="bold" /> {detailAnime?.favorites.toLocaleString()}
      </p>
      <p className="flex items-center gap-1">
        <Clock weight="bold" /> {detailAnime?.status}
      </p>
    </div>
  );
};

export default DescriptionDetailAnime;
