import { Link, useParams } from "react-router";
import Navbar from "../components/Fragments/Navbar";
import { ReactNode, useEffect, useState } from "react";
import {
  episodeAnime,
  fetchDetailAnime,
  recomendationAnimes,
} from "../services/animeDetail";
import { DetailAnime } from "../interfaces/api/IDetailAnime";
import Hr from "../components/Elements/Hr";
import { DataAnime } from "../interfaces/models/IDataAnime";
import { DetailDataAnime } from "../interfaces/api/IDetailDataAnime";
import CardAnime from "../components/Fragments/CardAnime";
import {
  Bookmark,
  CalendarBlank,
  Clock,
  Heart,
  Leaf,
  Medal,
  ShareNetwork,
  Star,
  ThumbsUp,
  UsersThree,
  Video,
} from "@phosphor-icons/react";
import SpotlightCard from "../components/ui/SpotlightCard/SpotlightCard";
import Footer from "../components/Fragments/Footer";

interface EpisodeAnime {
  mal_id: number;
}

const DetailAnimePage = () => {
  const [detailAnime, setDetailAnime] = useState<DetailAnime | null>(null);
  const [episodeAnim, setEpisodeAnim] = useState<EpisodeAnime[]>([]);
  const [recomenAnim, setRecomenAnim] = useState<DataAnime[]>([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        scrollTo({ behavior: "smooth", top: 0 });
        const response = await fetchDetailAnime(id);
        setDetailAnime(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAnime();
  }, [id]);

  useEffect(() => {
    const fetchEpisodeAnime = async () => {
      try {
        const response = await episodeAnime(id);
        const result = response?.map((eps: EpisodeAnime) => ({
          mal_id: eps.mal_id,
        }));
        setEpisodeAnim(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEpisodeAnime();
  });

  useEffect(() => {
    const fetchEpisodeAnime = async () => {
      try {
        const response = await recomendationAnimes();
        const result = response?.map((anime: DetailDataAnime) => ({
          title: anime.title,
          img: anime.images.jpg.large_image_url,
          malId: anime.mal_id,
        }));
        setRecomenAnim(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEpisodeAnime();
  }, []);

  const oldDatas = JSON.parse(localStorage.getItem("anime")!) || [];

  const handleBookmark = () => {
    const result = {
      title: detailAnime?.title,
      img: detailAnime?.images.jpg.large_image_url,
      malId: detailAnime?.mal_id,
    };
    const newDatas: DataAnime[] = [...oldDatas, result];
    console.log(newDatas)
    // localStorage.setItem("anime", JSON.stringify(newDatas));
  };
  return (
    <section className="w-full text-white">
      <Navbar />
      <div className="relative flex flex-col items-center">
        <div className="relative h-[80vh] w-full bg-slate-800 before:absolute before:bottom-0 before:left-0 before:z-2 before:size-full before:bg-linear-to-t before:from-slate-900 before:via-slate-900/50 before:to-transparent">
          <img
            src={detailAnime?.images.jpg.large_image_url}
            alt={detailAnime?.title}
            className="size-full object-cover opacity-10"
          />
        </div>
        <div className="absolute top-0 left-1/2 z-3 flex w-full -translate-x-1/2 flex-col items-center justify-center gap-6 py-20 sm:w-10/12 sm:flex-row sm:py-30">
          <div className="h-85 w-65 cursor-pointer overflow-hidden rounded-xl bg-slate-500 sm:h-70 sm:w-60">
            <img
              src={detailAnime?.images.jpg.large_image_url}
              alt={detailAnime?.title}
              className="size-full object-cover transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="w-11/12 sm:w-xl">
            <h2 className="mb-1 text-2xl font-bold sm:text-3xl">
              {detailAnime?.title}
            </h2>
            <h2 className="mb-3 text-lg sm:text-xl">
              {detailAnime?.title_japanese}
            </h2>
            <div className="flex items-center gap-4 text-sm">
              <button className="mb-3 cursor-pointer rounded-sm bg-slate-700 p-2">
                <ShareNetwork size={20} weight="bold" />
              </button>
              <button
                className="mb-3 flex cursor-pointer items-center gap-1 rounded-sm bg-slate-700 p-2"
                onClick={handleBookmark}
              >
                <Bookmark size={20} weight="bold" /> Bookmark
              </button>
              <button
                className="mb-3 flex cursor-pointer items-center gap-1 rounded-sm bg-slate-700 p-2"
                onClick={() => alert("Cooming soon!")}
              >
                <CalendarBlank size={20} weight="bold" />{" "}
                {detailAnime?.broadcast.day}
              </button>
            </div>
            <div className="mb-3 flex items-center gap-4">
              <p className="flex items-center gap-1">
                <Star weight="bold" /> {detailAnime?.score}
              </p>
              <p className="flex items-center gap-1">
                <ThumbsUp weight="bold" />{" "}
                {detailAnime?.favorites.toLocaleString()}
              </p>
              <p className="flex items-center gap-1">
                <Clock weight="bold" /> {detailAnime?.status}
              </p>
            </div>
            {detailAnime?.genres.map((genre, id) => (
              <button
                key={id}
                className="mr-3 mb-2 rounded-xl bg-indigo-500 px-2 py-1 text-sm font-semibold"
              >
                <Link to={`/genres/${genre.mal_id}/${genre.name}`}>
                  {genre.name}
                </Link>
              </button>
            ))}
          </div>
        </div>
        <DescriptionAnime detailAnim={detailAnime} />
        <EpisodesAnime episodeAnim={episodeAnim} />
        <RecomendationAnime recomenAnim={recomenAnim} />
      </div>
      <Footer />
    </section>
  );
};

interface DescriptionAnimeProps {
  detailAnim: DetailAnime | null;
  icon?: ReactNode;
  text?: string;
  value?: string | number;
}

const DescriptionAnime = (props: DescriptionAnimeProps) => {
  const { detailAnim } = props;
  return (
    <div className="mt-70 flex w-11/12 flex-col sm:mt-0 sm:w-8/12">
      <h2 className="mb-1 text-lg font-bold">Synopsis</h2>
      <p className="mt-2 mb-3 text-sm text-slate-200">{detailAnim?.synopsis}</p>
      <Hr />
      <div className="my-8">
        <h2 className="mb-6 text-lg font-bold">Description Anime</h2>
        <DescriptionAllAnime detailAnim={detailAnim} />
      </div>
      <Hr />
      <div className="my-8">
        <h2 className="mb-6 text-lg font-bold">Studios</h2>
        {detailAnim?.studios.map((studio, id) => (
          <button
            key={id}
            className="mr-3 mb-2.5 rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-slate-200/20"
          >
            <Link to={`/genres`}>{studio.name}</Link>
          </button>
        ))}
      </div>
      <Hr />
      <div className="my-8">
        <h2 className="mb-6 text-lg font-bold">Producers</h2>
        {detailAnim?.producers.map((producer, id) => (
          <button
            key={id}
            className="mr-3 mb-2.5 rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-slate-200/20"
          >
            <Link to={`/genres`}>{producer.name}</Link>
          </button>
        ))}
      </div>
    </div>
  );
};

const DescriptionAllAnime = (props: DescriptionAnimeProps) => {
  const { detailAnim } = props;
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
      <DescriptionItem
        detailAnim={detailAnim}
        text="Rank"
        icon={<Medal size={35} />}
        value={`#${detailAnim?.rank}`}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Members"
        icon={<UsersThree size={35} />}
        value={detailAnim?.members.toLocaleString()}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Aired"
        icon={<CalendarBlank size={35} />}
        value={detailAnim?.aired.string}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Episodes"
        icon={<Video size={35} />}
        value={detailAnim?.episodes}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Duration"
        icon={<Clock size={35} />}
        value={detailAnim?.duration}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Popularity"
        icon={<Heart size={35} />}
        value={detailAnim?.popularity}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Year"
        icon={<CalendarBlank size={35} />}
        value={detailAnim?.year}
      />
      <DescriptionItem
        detailAnim={detailAnim}
        text="Season"
        icon={<Leaf size={35} />}
        value={detailAnim?.season}
      />
    </div>
  );
};

const DescriptionItem = (props: DescriptionAnimeProps) => {
  const { text, icon, value } = props;
  return (
    <SpotlightCard
      spotlightColor="rgba(200, 229, 255, 0.1)"
      className="mb-3 flex h-25 items-center gap-3 rounded-md border-t-10 border-solid border-indigo-400 bg-slate-800 px-4 transition-all duration-300 hover:scale-98"
    >
      {icon}
      <div className="flex flex-col">
        <p className="font-semibold">{text} </p>
        <p className="text-sm">{value}</p>
      </div>
    </SpotlightCard>
  );
};

interface RecomendationAnimeProps {
  recomenAnim: DataAnime[];
}

const RecomendationAnime = (props: RecomendationAnimeProps) => {
  const { recomenAnim } = props;
  return (
    <div className="mt-10 w-11/12 sm:w-8/12">
      <h2 className="mb-1 text-lg font-bold">Recomendation Anime</h2>
      <Hr />
      <div className="mt-10 mb-20 grid w-full grid-cols-2 place-content-center gap-4 sm:grid-cols-4">
        {recomenAnim.map((anime) => (
          <CardAnime
            title={anime.title}
            img={anime.img}
            key={anime.malId}
            malId={anime.malId}
            className="sm:h-55"
          />
        ))}
      </div>
    </div>
  );
};

interface EpisodesAnimeProps {
  episodeAnim: EpisodeAnime[];
}

const EpisodesAnime = (props: EpisodesAnimeProps) => {
  const { episodeAnim } = props;
  return (
    <div className="flex w-11/12 flex-col items-center sm:w-8/12">
      <h2 className="mb-1 self-start text-lg font-bold">Episodes</h2>
      <Hr />
      <ul className="scrollbar h-83 w-full overflow-y-scroll pt-4 sm:-ml-6">
        {episodeAnim?.map((eps) => (
          <li
            key={eps.mal_id}
            className="mx-auto mb-3 cursor-pointer rounded-md bg-slate-800 p-3 text-sm shadow-md transition-all duration-300 hover:ring-2 hover:ring-slate-600 sm:w-[95%]"
          >
            <Link to={`/`}>Episode {eps.mal_id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailAnimePage;
