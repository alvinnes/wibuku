import { useEffect, useState } from "react";
import { genresAnime } from "../services/animeGenres";

interface GenresAnime {
  name: string;
  mal_id: number;
}

const useFecthGenres = () => {
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
  return { isLoading, genresAnim };
};

export default useFecthGenres;
