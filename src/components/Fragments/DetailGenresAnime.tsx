import { Link } from "react-router";
import { DetailAnime } from "../../interfaces/IDetailAnime";

interface DetailGenresAnimeProps {
  detailAnime: DetailAnime;
}

const DetailGenresAnime = ({ detailAnime }: DetailGenresAnimeProps) => {
  return detailAnime?.genres.map((genre, id) => (
    <button
      key={id}
      className="mr-3 mb-2 rounded-xl bg-indigo-500 px-2 py-1 text-sm font-semibold"
    >
      <Link to={`/genres/${genre.mal_id}/${genre.name}`}>{genre.name}</Link>
    </button>
  ));
};

export default DetailGenresAnime;
