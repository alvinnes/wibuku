import { useEffect, useState } from "react";
import Navbar from "../components/Fragments/Navbar";
import { dataAnimePopular } from "../services/animePopular";
import { DetailDataAnime } from "../interfaces/api/IDetailDataAnime";
import { DataAnime } from "../interfaces/models/IDataAnime";
import Hr from "../components/Elements/Hr";
import CardAnime from "../components/Fragments/CardAnime";
import Pagination from "../components/Fragments/Pagination";
import { DataPagination } from "../interfaces/models/IDataPagination";
import Footer from "../components/Fragments/Footer";

const AnimePopularPage = () => {
  const [animePopular, setAnimePopular] = useState<DataAnime[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [dataPagination, setDataPagination] = useState<DataPagination>({});

  useEffect(() => {
    const fetchAnimePopular = async () => {
      try {
        setIsLoading(true);
        const response = await dataAnimePopular(page);
        const result = response.data.map((anime: DetailDataAnime) => ({
          title: anime.title,
          img: anime.images.jpg.large_image_url,
          malId: anime.mal_id,
        }));
        setDataPagination(response.pagination);
        setAnimePopular(result);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnimePopular();
  }, [page]);

  return (
    <section className="flex w-full flex-col items-center">
      <Navbar />
      <div className="flex w-11/12 flex-col items-center py-30 sm:w-10/12">
        <h2 className="self-start text-2xl font-semibold text-white">
          Anime Popular #{page}
        </h2>
        <Hr />
        <p
          className={`${isLoading ? "block" : "hidden"} mt-10 text-2xl font-semibold text-white`}
        >
          Loading...
        </p>
        <div className="mt-10 mb-20 grid w-full grid-cols-2 place-content-center gap-8 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))]">
          {animePopular.map((anime) => (
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
      </div>
      <Footer />
    </section>
  );
};

export default AnimePopularPage;
