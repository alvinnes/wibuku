import { DataAnime } from "../../interfaces/IDataAnime";
import CardAnime from "./CardAnime";

interface RecomendationAnimeProps {
  recomenAnim: DataAnime[];
}

const RecomendationAnime = (props: RecomendationAnimeProps) => {
  const { recomenAnim } = props;
  return (
    <div className="mt-10 w-11/12 sm:w-10/12">
      <h2 className="mb-1 text-lg font-bold">Recomendation Anime</h2>
      <div className="mt-10 mb-20 grid w-full grid-cols-2 place-content-center gap-4 sm:grid-cols-4">
        {recomenAnim.map((anime) => (
          <CardAnime
            title={anime.title}
            img={anime.img}
            key={anime.malId}
            malId={anime.malId}
            className="sm:h-55"
          />
        ))}
      </div>
    </div>
  );
};

export default RecomendationAnime;
