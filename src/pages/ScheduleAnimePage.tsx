import { useParams } from "react-router";
import Navbar from "../components/Fragments/Navbar";
import { useEffect, useState } from "react";
import { schedulAnime } from "../services/animeSchedule";
import { DetailDataAnime } from "../interfaces/api/IDetailDataAnime";
import Hr from "../components/Elements/Hr";
import { DataAnime } from "../interfaces/models/IDataAnime";
import CardAnime from "../components/Fragments/CardAnime";
import Footer from "../components/Fragments/Footer";

const ScheduleAnimePage = () => {
  const [scheduleAnim, setShceduleAnim] = useState<DataAnime[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { day } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchScheculeAnime = async () => {
      try {
        scrollTo({ behavior: "smooth", top: 0 });
        const response = await schedulAnime(day);
        const result = response.map((anime: DetailDataAnime) => ({
          title: anime.title,
          img: anime.images.jpg.large_image_url,
          malId: anime.mal_id,
        }));
        setShceduleAnim(result);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchScheculeAnime();
  }, [day]);
  return (
    <section className="flex w-full flex-col items-center">
      <Navbar />
      <div className="flex w-11/12 flex-col items-center py-30 sm:w-10/12">
        <h2 className="self-start text-2xl font-semibold text-white">
          Anime Ongoing {day}
        </h2>
        <Hr />
        <p
          className={`${isLoading ? "block" : "hidden"} mt-10 text-2xl font-semibold text-white`}
        >
          Loading...
        </p>
        {scheduleAnim.length > 0 && (
          <div className="mt-10 mb-20 grid w-full grid-cols-2 place-content-center gap-8 sm:grid-cols-[repeat(auto-fit,minmax(10rem,10rem))]">
            {scheduleAnim.map((anime) => (
              <CardAnime
                title={anime.title}
                img={anime.img}
                malId={anime.malId}
                key={anime.malId}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default ScheduleAnimePage;
