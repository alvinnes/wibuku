import { Bookmark, CalendarBlank, ShareNetwork } from "@phosphor-icons/react";
import { DetailAnime } from "../../interfaces/IDetailAnime";

interface FeaturesBtnDescirption {
  detailAnime: DetailAnime;
}

const FeaturesBtnDescription = ({ detailAnime }: FeaturesBtnDescirption) => {
  const handleBookmark = (datas: DetailAnime) => {
    const oldDatas = JSON.parse(localStorage.getItem("bookmarked")!) || [];
    const existAnime = oldDatas.find(
      (anime: DetailAnime) => anime.title == datas.title,
    );
    if (existAnime) {
      alert("Anime sudah ada di bookmark");
      return false;
    }
    const dataAnimes = {
      title: datas.title,
      img: datas.images.jpg.large_image_url,
      malId: datas.mal_id,
    };
    const newDatas = [...oldDatas, dataAnimes];
    localStorage.setItem("bookmarked", JSON.stringify(newDatas));
    console.log(dataAnimes);
    alert("Berhasil");
  };
  return (
    <div className="flex items-center gap-4 text-sm">
      <button className="mb-3 cursor-pointer rounded-sm bg-slate-700 p-2">
        <ShareNetwork size={20} weight="bold" />
      </button>
      <button
        className="mb-3 flex cursor-pointer items-center gap-1 rounded-sm bg-slate-700 p-2"
        onClick={() => handleBookmark(detailAnime)}
      >
        <Bookmark size={20} weight="bold" /> Bookmark
      </button>
      <button
        className="mb-3 flex cursor-pointer items-center gap-1 rounded-sm bg-slate-700 p-2"
        onClick={() => alert("Cooming soon!")}
      >
        <CalendarBlank size={20} weight="bold" /> {detailAnime?.broadcast.day}
      </button>
    </div>
  );
};

export default FeaturesBtnDescription;
