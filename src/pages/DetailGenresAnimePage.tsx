import { detailGenresAnime } from "../services/animeGenres";
import CardAnime from "../components/Fragments/CardAnime";
import Pagination from "../components/Fragments/Pagination";
import useAnime from "../hooks/useAnime";
import SectionAnimeLayouts from "../components/Layouts/SectionAnimeLayouts";
import { useParams } from "react-router";

const DetailGenresPage = () => {
  const { name } = useParams();
  const { dataAnime, page, setPage, dataPagination, isLoading } = useAnime({
    api: detailGenresAnime,
  });
  return (
    <SectionAnimeLayouts titlePage={`Genre Anime #${name}`}>
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

export default DetailGenresPage;
