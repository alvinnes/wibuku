import { useParams } from "react-router";
import Navbar from "../components/Fragments/Navbar";
import { useEffect, useState } from "react";
import {
  episodeAnime,
  fetchDetailAnime,
  recomendationAnimes,
} from "../services/animeDetail";
import { DetailAnime } from "../interfaces/IDetailAnime";
import { DataAnime } from "../interfaces/IDataAnime";
import { DetailDataAnime } from "../interfaces/IDetailDataAnime";
import Footer from "../components/Fragments/Footer";
import RecomendationAnime from "../components/Fragments/RecomendationAnime";
import EpisodesAnime from "../components/Fragments/EpisodeAnime";
import DescriptionAnime from "../components/Fragments/DescriptionAnime";
import FeaturesBtnDescription from "../components/Fragments/FeaturesBtnDescription";
import DetailGenresAnime from "../components/Fragments/DetailGenresAnime";
import DescriptionDetailAnime from "../components/Fragments/DescriptionDetailAnime";
import {
  BgImgDetailAnime,
  ImgDetailAnime,
} from "../components/Fragments/SectionImgDetailAnime";

export interface EpisodeAnime {
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
        scrollTo({ behavior: "smooth", top: 0 });
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
  return (
    <section className="w-full text-white">
      <Navbar />
      <div className="relative flex w-full flex-col items-center">
        <BgImgDetailAnime detailAnime={detailAnime!} />
        <div className="flex w-full flex-col items-center justify-center gap-6 py-20 sm:w-10/12 sm:flex-col sm:py-30">
          <div className="flex w-11/12 flex-col items-center gap-10 sm:w-10/12 sm:flex-row">
            <ImgDetailAnime detailAnime={detailAnime!} />
            <div className="w-full sm:w-8/12">
              <h2 className="mb-1 text-2xl font-bold sm:text-4xl">
                {detailAnime?.title}
              </h2>
              <h2 className="mb-3 text-lg sm:text-xl">
                {detailAnime?.title_japanese}
              </h2>
              <FeaturesBtnDescription detailAnime={detailAnime!} />
              <DescriptionDetailAnime detailAnime={detailAnime!} />
              <DetailGenresAnime detailAnime={detailAnime!} />
            </div>
          </div>
          <DescriptionAnime detailAnim={detailAnime} />
          <EpisodesAnime episodeAnim={episodeAnim} />
          <RecomendationAnime recomenAnim={recomenAnim} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DetailAnimePage;
