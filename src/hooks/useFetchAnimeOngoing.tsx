import { useEffect, useState } from "react";
import { fetchAnimeOngoing } from "../services/animeOngoing";
import { DetailDataAnime } from "../interfaces/IDetailDataAnime";
import { DataAnime } from "../interfaces/IDataAnime";

const useFetchAnimeOngoing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [animeOngoing, setAnimeOngoing] = useState<DataAnime[]>([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setIsLoading(true);
        const response = await fetchAnimeOngoing();
        const result = response.map((anime: DetailDataAnime) => ({
          title: anime.title,
          img: anime.images.jpg.large_image_url,
          malId: anime.mal_id,
        }));
        setAnimeOngoing(result);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnime();
  }, []);
  return { isLoading, animeOngoing };
};

export default useFetchAnimeOngoing;
