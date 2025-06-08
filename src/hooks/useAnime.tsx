import { useEffect, useState } from "react";
import { DataAnime } from "../interfaces/IDataAnime";
import { DataPagination } from "../interfaces/IDataPagination";
import { DetailDataAnime } from "../interfaces/IDetailDataAnime";
import { useParams } from "react-router";

interface ApiResponse {
  data: DetailDataAnime[];
  pagination?: {
    last_visible_page: number;
  };
}

interface UseAnimeProps {
  api: (
    page: number,
    id?: string,
    name?: string,
    day?: string,
  ) => Promise<ApiResponse>;
}

const useAnime = ({ api }: UseAnimeProps) => {
  const [dataAnime, setDataAnime] = useState<DataAnime[]>([]);
  const [dataPagination, setDataPagination] = useState<DataPagination>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const { id, name, day } = useParams();

  useEffect(() => {
    const fetchDetailGenresAnime = async () => {
      try {
        setIsLoading(true);
        const response = await api(page, id, name, day);
        const result = response.data.map((anime: DetailDataAnime) => ({
          title: anime.title,
          img: anime.images.jpg.large_image_url,
          malId: anime.mal_id,
        }));
        setDataPagination(response.pagination!);
        setDataAnime(result);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetailGenresAnime();
  }, [id, name, day, page, api]);
  return { dataAnime, dataPagination, isLoading, page, setPage };
};

export default useAnime;
