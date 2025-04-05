import { useEffect, useState } from "react";
import CardAnime from "./CardAnime";
import { DetailDataAnime } from "../../interfaces/api/IDetailDataAnime";
import Hr from "../Elements/Hr";
import { fetchAnimeOngoing } from "../../services/animeOngoing";
import { DataAnime } from "../../interfaces/models/IDataAnime";
// import { SwiperSlide, Swiper } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Link } from "react-router";

const SectionOngoing = () => {
  const [animeOngoing, setAnimeOngoing] = useState<DataAnime[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [animUpComing, setAnimUpComing] = useState<DataAnime[]>([]);

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

  // useEffect(() => {
  //   const fetchAnimeupComing = async () => {
  //     try {
  //       const response = await animeupComing();
  //       const result = response?.map((anime: DetailDataAnime) => ({
  //         title: anime.title,
  //         titleJapanese: anime.title_japanese,
  //         synopsis: anime.synopsis,
  //         img: anime.images.jpg.large_image_url,
  //         malId: anime.mal_id,
  //       }));
  //       console.log(result);
  //       setAnimUpComing(result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAnimeupComing();
  // }, []);

  return (
    <section className="flex w-full flex-col items-center gap-30 py-20">
      {/* <div className="relative flex h-[80vh] w-10/12 items-center justify-center overflow-hidden bg-slate-700">
        <Swiper slidesPerView={1} modules={[Navigation, Pagination]}>
          {animUpComing?.map((anime) => (
            <>
              <SwiperSlide className="">
                <img
                  src={anime.img}
                  alt={anime.title}
                  className="size-full object-cover"
                />
                <ContentSlide anime={anime} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div> */}
      <SectionAnime animeOngoing={animeOngoing} isLoading={isLoading} />
    </section>
  );
};

// interface ContentSlideProps {
//   anime: DataAnime;
// }

// const ContentSlide = (props: ContentSlideProps) => {
//   const { anime } = props;
//   return (
//     <div className="absolute top-1/2 left-1/2 flex w-2xl -translate-1/2 items-center gap-4 text-slate-300">
//       <div className="h-70 w-55 overflow-hidden rounded-xl bg-slate-700 shadow-xl">
//         <img src={anime.img} alt="" className="size-full object-cover" />
//       </div>
//       <div>
//         <span className="rounded-md bg-indigo-500 px-8 py-2.5 font-semibold text-white">
//           Upcoming
//         </span>
//         <h2 className="my-3 text-5xl font-bold">{anime.title}</h2>
//         <h2>{anime.titleJapanese}</h2>
//         <p>{anime.synopsis}</p>
//       </div>
//     </div>
//   );
// };

interface SectionAnimeProps {
  isLoading: boolean;
  animeOngoing: DataAnime[];
}

const SectionAnime = (props: SectionAnimeProps) => {
  const { animeOngoing, isLoading } = props;
  return (
    <div className="mt-10 flex w-11/12 flex-col items-center">
      <div className="flex w-full justify-between sm:gap-0 gap-3">
        <h2 className="self-start text-2xl font-semibold text-white">
          Anime Ongoing
        </h2>
        <button className="mr-3 mb-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white">
          <Link to="/allOngoing">Views All</Link>
        </button>
      </div>
      <Hr />
      <p
        className={`${isLoading ? "block" : "hidden"} mt-10 text-2xl font-semibold text-white`}
      >
        Loading...
      </p>
      <div className="mt-10 mb-20 grid w-full grid-cols-2 place-content-center gap-8 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))]">
        {animeOngoing.map((anime, id) => (
          <CardAnime
            title={anime.title}
            img={anime.img}
            key={id}
            malId={anime.malId}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionOngoing;
// before:absolute before:bottom-0 before:left-0 before:z-2 before:h-0 before:w-full before:bg-linear-to-t before:from-slate-900 before:to-transparent
