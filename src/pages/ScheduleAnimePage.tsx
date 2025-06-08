import { useParams } from "react-router";
import { schedulAnime } from "../services/animeSchedule";
import CardAnime from "../components/Fragments/CardAnime";
import SectionAnimeLayouts from "../components/Layouts/SectionAnimeLayouts";
import useAnime from "../hooks/useAnime";

const ScheduleAnimePage = () => {
  const { day } = useParams();
  const { dataAnime, isLoading } = useAnime({ api: schedulAnime });
  return (
    <SectionAnimeLayouts titlePage={`Anime Ongoing ${day}`}>
      <p
        className={`${isLoading ? "block" : "hidden"} mt-10 text-2xl font-semibold text-white`}
      >
        Loading...
      </p>
      {dataAnime.length > 0 && (
        <div className="mt-10 mb-20 grid w-full grid-cols-2 place-content-center gap-8 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))]">
          {dataAnime.map((anime) => (
            <CardAnime
              title={anime.title}
              img={anime.img}
              malId={anime.malId}
              key={anime.malId}
            />
          ))}
        </div>
      )}
    </SectionAnimeLayouts>
  );
};

export default ScheduleAnimePage;
