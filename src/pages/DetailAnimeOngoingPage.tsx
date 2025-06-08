import CardAnime from "../components/Fragments/CardAnime";
import Pagination from "../components/Fragments/Pagination";
import { fetchAllAnimeOngoing } from "../services/animeOngoing";
import useAnime from "../hooks/useAnime";
import SectionAnimeLayouts from "../components/Layouts/SectionAnimeLayouts";

const DetailAnimeOngoingPage = () => {
  const { dataAnime, dataPagination, isLoading, page, setPage } = useAnime({
    api: fetchAllAnimeOngoing,
  });
  return (
    <SectionAnimeLayouts titlePage={`Anime Ongoing #${page}`}>
      <p
        className={`${isLoading ? "block" : "hidden"} mt-10 text-2xl font-semibold text-white`}
      >
        Loading...
      </p>
      <div className="mt-10 mb-20 grid w-full grid-cols-2 place-content-center gap-8 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))]">
        {dataAnime.map((anime) => (
          <CardAnime
            title={anime.title}
            img={anime.img}
            key={anime.malId}
            malId={anime.malId}
          />
        ))}
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        dataPagination={dataPagination}
      />
    </SectionAnimeLayouts>
  );
};

export default DetailAnimeOngoingPage;
