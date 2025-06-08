import { useParams } from "react-router";
import { searchAnime } from "../services/searchAnime";
import CardAnime from "../components/Fragments/CardAnime";
import Pagination from "../components/Fragments/Pagination";
import SectionAnimeLayouts from "../components/Layouts/SectionAnimeLayouts";
import useAnime from "../hooks/useAnime";

const ResultSearch = () => {
  const { name } = useParams();
  const { dataAnime, page, isLoading, setPage, dataPagination } = useAnime({
    api: searchAnime,
  });
  return (
    <SectionAnimeLayouts titlePage={`Search Result Anime ${name} :`}>
      <p
        className={`${isLoading ? "block" : "hidden"} mt-10 block text-2xl font-semibold text-white`}
      >
        Loading...
      </p>
      <div className="mt-10 grid w-full grid-cols-2 place-content-center gap-8 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))]">
        {dataAnime.map((anime, id) => (
          <CardAnime
            key={id}
            title={anime.title}
            img={anime.img}
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

export default ResultSearch;
