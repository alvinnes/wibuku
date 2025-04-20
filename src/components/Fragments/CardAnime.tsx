import { Video } from "@phosphor-icons/react";
import { Link } from "react-router";

interface AnimeProps {
  title: string;
  img: string;
  className?: string;
  malId: number;
}

const CardAnime = (props: AnimeProps) => {
  const { title, img, className, malId } = props;
  return (
    <Link to={`/detailAnime/${malId}` }>
      <div
        className={`group relative h-50 cursor-pointer overflow-hidden rounded-2xl text-slate-300 shadow-md ${className}`}
      >
        <img src={img} alt={title} className="size-full object-cover transition-all duration-300 group-hover:scale-110" />
        <div className="invisible absolute top-0 left-0 flex h-55 w-full items-center justify-center bg-black/70 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
          <Video size={35} />
        </div>
      </div>
      <h2 className="line-clamp-2 w-full mt-1 sm:w-45 overflow-hidden text-center text-ellipsis text-slate-300">
        {title}
      </h2>
    </Link>
  );
};

export default CardAnime;
