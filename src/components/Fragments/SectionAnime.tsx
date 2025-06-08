import CardAnime from "./CardAnime";
import { Link } from "react-router";
import useFetchAnimeOngoing from "../../hooks/useFetchAnimeOngoing";

const SectionOngoing = () => {
  const { isLoading, animeOngoing } = useFetchAnimeOngoing();
  return (
    <section className="flex w-full flex-col items-center gap-30 py-20">
      <div className="mt-10 flex w-11/12 flex-col items-center sm:w-10/12">
        <div className="flex w-full justify-between gap-3 sm:px-15 sm:gap-0">
          <h2 className="self-start rounded-xl bg-indigo-500 p-3 text-2xl font-semibold text-white">
            Anime Ongoing
          </h2>
          <button className="mr-3 mb-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white">
            <Link to="/allOngoing">Views All</Link>
          </button>
        </div>
        <p
          className={`${isLoading ? "block" : "hidden"} mt-10 text-2xl font-semibold text-white`}
        >
          Loading...
        </p>
        <div className="mt-10 mb-20 grid w-full grid-cols-2 place-content-center gap-8 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))]">
          {animeOngoing.map((anime, id) => (
            <CardAnime
              title={anime.title}
              img={anime.img}
              key={id}
              malId={anime.malId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOngoing;
