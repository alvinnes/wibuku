import { DetailAnime } from "../../interfaces/IDetailAnime";

interface SectionImgDetailAnimeProps {
  detailAnime: DetailAnime;
}
export const ImgDetailAnime = ({ detailAnime }: SectionImgDetailAnimeProps) => {
  return (
    <div className="h-85 w-65 cursor-pointer overflow-hidden rounded-xl bg-slate-500 sm:h-70 sm:w-60">
      <img
        src={detailAnime?.images.jpg.large_image_url}
        alt={detailAnime?.title}
        className="size-full object-cover transition-all duration-300 hover:scale-110"
      />
    </div>
  );
};

export const BgImgDetailAnime = ({
  detailAnime,
}: SectionImgDetailAnimeProps) => {
  return (
    <div className="absolute top-0 left-0 -z-1 h-[80vh] w-full bg-slate-800 before:absolute before:bottom-0 before:left-0 before:z-2 before:size-full before:bg-linear-to-t before:from-slate-900 before:via-slate-900/30 before:to-transparent">
      <img
        src={detailAnime?.images.jpg.large_image_url}
        alt={detailAnime?.title}
        className="size-full object-cover opacity-20"
      />
    </div>
  );
};
