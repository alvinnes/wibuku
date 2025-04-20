import { useParams } from "react-router";
import Navbar from "../components/Fragments/Navbar";
import { Fragment, useEffect, useState } from "react";
import { searchAnime } from "../services/searchAnime";
import CardAnime from "../components/Fragments/CardAnime";
import { DetailDataAnime } from "../interfaces/api/IDetailDataAnime";
import Hr from "../components/Elements/Hr";
import { DataAnime } from "../interfaces/models/IDataAnime";
import { DataPagination } from "../interfaces/models/IDataPagination";
import Pagination from "../components/Fragments/Pagination";

const ResultSearch = () => {
  const params = useParams();
  const [dataAnime, setDataAnime] = useState<DataAnime[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [dataPagination, setDataPagination] = useState<DataPagination>({});

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      try {
        if (params.name) {
          const dataResult = await searchAnime(params.name, page);
          const response = dataResult.data?.map((anime: DetailDataAnime) => ({
            title: anime.title,
            img: anime.images.jpg.large_image_url,
            malId: anime.mal_id,
          }));
          setDataPagination(dataResult.pagination);
          setDataAnime(response);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setisLoading(false);
      }
    };
    fetchData();
  }, [params.name, page]);
  return (
    <section className="flex w-full flex-col items-center">
      <Navbar />
      <div className="mt-30 flex w-11/12 sm:w-10/12 flex-col items-center">
        <h2 className="self-start text-xl font-semibold text-white">
          Search Result Anime {params.name} :
        </h2>
        <Hr />
        <p
          className={`${isLoading ? "block" : "hidden"} mt-10 block text-2xl font-semibold text-white`}
        >
          Loading...
        </p>
        <div className="mt-10 grid w-full grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))] place-content-center gap-8">
          {dataAnime.map((anime, id) => (
            <Fragment key={id}>
              <CardAnime
                title={anime.title}
                img={anime.img}
                malId={anime.malId}
              />
            </Fragment>
          ))}
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          dataPagination={dataPagination}
        />
        <Hr />
      </div>
    </section>
  );
};

export default ResultSearch;
