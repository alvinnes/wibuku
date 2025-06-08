import { useEffect, useState } from "react";
import SectionAnimeLayouts from "../components/Layouts/SectionAnimeLayouts";
import CardAnime from "../components/Fragments/CardAnime";
import { DataAnime } from "../interfaces/IDataAnime";
import { Bookmark } from "@phosphor-icons/react";
import ModalConfirmDelete from "../components/Fragments/ModalConfirmDelete";

const BookMarkPage = () => {
  const [dataAnimeBookmarks, setDataAnimeBookmarks] = useState<DataAnime[]>([]);
  const [isClickedBtn, setIsClickedBtn] = useState(false);

  useEffect(() => {
    const bookmarkAnime = JSON.parse(localStorage.getItem("bookmarked")!) || [];
    setDataAnimeBookmarks(bookmarkAnime);
  }, []);

  return (
    <SectionAnimeLayouts titlePage="Bookmarks">
      <button
        onClick={() => setIsClickedBtn(true)}
        disabled={dataAnimeBookmarks.length < 1}
        className={`${dataAnimeBookmarks.length < 1 ? "cursor-not-allowed bg-red-800" : "cursor-pointer"} mt-6 self-start rounded-md bg-red-500 px-6 py-2.5 font-semibold text-white shadow-md sm:ml-17`}
      >
        Delete Bookmarks
      </button>
      {dataAnimeBookmarks.length < 1 && (
        <p className="mt-30 flex flex-col items-center gap-4 text-center text-4xl font-semibold text-white">
          <Bookmark size={80} weight="bold" /> Bookmarks still empty
        </p>
      )}
      <div className="mt-10 mb-20 grid w-full grid-cols-2 place-content-center gap-8 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))]">
        {dataAnimeBookmarks.map((anime: DataAnime) => (
          <CardAnime
            key={anime.malId}
            img={anime.img}
            malId={anime.malId}
            title={anime.title}
          />
        ))}
      </div>
      <ModalConfirmDelete
        isClickedBtn={isClickedBtn}
        setIsClickedBtn={setIsClickedBtn}
        setDataAnimeBookmarks={setDataAnimeBookmarks}
      />
    </SectionAnimeLayouts>
  );
};

export default BookMarkPage;
