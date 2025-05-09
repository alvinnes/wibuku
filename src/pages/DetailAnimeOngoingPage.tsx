import Navbar from "../components/Fragments/Navbar";
import { useEffect, useState } from "react";
import { DetailDataAnime } from "../interfaces/api/IDetailDataAnime";
import Hr from "../components/Elements/Hr";
import CardAnime from "../components/Fragments/CardAnime";
import Footer from "../components/Fragments/Footer";
import Pagination from "../components/Fragments/Pagination";
import { DataAnime } from "../interfaces/models/IDataAnime";
import { DataPagination } from "../interfaces/models/IDataPagination";
import { fetchAllAnimeOngoing } from "../services/animeOngoing";

const DetailAnimeOngoingPage = () => {
  const [detailAnime, setDetailAnime] = useState<DataAnime[]>([]);
  const [dataPagination, setDataPagination] = useState<DataPagination>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchDetailGenresAnime = async () => {
      try {
        setIsLoading(true);
        const response = await fetchAllAnimeOngoing(page);
        const result = response.data.map((anime: DetailDataAnime) => ({
          title: anime.title,
          img: anime.images.jpg.large_image_url,
          malId: anime.mal_id,
        }));
        setDataPagination(response.pagination);
        setDetailAnime(result);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetailGenresAnime();
  }, [page]);
  return (
    <section className="flex w-full flex-col items-center">
      <Navbar />
      <div className="mt-30 flex w-11/12 sm:w-10/12 flex-col items-center">
        <h2 className="self-start text-3xl font-semibold text-white">
          Anime Ongoing #{page}
        </h2>
        <Hr />
        <p
          className={`${isLoading ? "block" : "hidden"} mt-10 text-2xl font-semibold text-white`}
        >
          Loading...
        </p>
        <div className="mt-10 mb-20 grid w-full grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] place-content-center gap-8">
          {detailAnime.map((anime) => (
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

export default DetailAnimeOngoingPage;
