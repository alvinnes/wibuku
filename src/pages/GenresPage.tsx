import { useEffect, useState } from "react";
import Navbar from "../components/Fragments/Navbar";
import { genresAnime } from "../services/animeGenres";
import { Link } from "react-router";
import Hr from "../components/Elements/Hr";
import Footer from "../components/Fragments/Footer";

interface GenresAnime {
  name: string;
  mal_id: number;
}

const GenresPage = () => {
  const [genresAnim, setGenresAnim] = useState<GenresAnime[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGenresAnime = async () => {
      try {
        setIsLoading(true);
        const response = await genresAnime();
        const result = response.map((genre: GenresAnime) => ({
          name: genre.name,
          mal_id: genre.mal_id,
        }));
        setGenresAnim(result);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGenresAnime();
  }, []);
  return (
    <section className="flex min-h-screen w-full flex-col items-center ">
      <Navbar />
      <div className="mt-30 flex w-10/12 flex-col items-center">
        <h2 className="self-start text-3xl font-semibold text-white">
          Genres List
        </h2>
        <Hr />
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
      </div>
      <Footer />
    </section>
  );
};

export default GenresPage;
