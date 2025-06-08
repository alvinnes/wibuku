import { Link } from "react-router";
import useFecthGenres from "../hooks/useFecthGenres";
import SectionAnimeLayouts from "../components/Layouts/SectionAnimeLayouts";

const GenresPage = () => {
  const { isLoading, genresAnim } = useFecthGenres();
  return (
    <SectionAnimeLayouts titlePage="Genres List" additionalStyle="ml-0">
      <p
        className={`${isLoading ? "block" : "hidden"} mt-10 text-2xl font-semibold text-white`}
      >
        Loading...
      </p>
      <div className="my-12">
        {genresAnim.map((genre) => (
          <button
            key={genre.mal_id}
            className="relative z-3 mr-4 mb-4 cursor-pointer rounded-xl bg-slate-800 px-4 py-2 font-semibold text-indigo-400 shadow-md before:absolute before:top-0 before:left-0 before:-z-1 before:size-full before:rounded-xl before:bg-slate-100/5 before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100"
          >
            <Link to={`/genres/${genre.mal_id}/${genre.name}`}>
              {genre.name}
            </Link>
          </button>
        ))}
      </div>
    </SectionAnimeLayouts>
  );
};

export default GenresPage;
