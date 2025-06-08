import axios, { AxiosResponse } from "axios";
import { DetailDataAnime } from "../interfaces/IDetailDataAnime";

export const fetchAnimeOngoing = async () => {
  try {
    const response: AxiosResponse<{ data: DetailDataAnime[] }> =
      await axios.get("https://api.jikan.moe/v4/seasons/now?type=tv&limit=20");
    return response.data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchAllAnimeOngoing = async (page: number) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/seasons/now?limit=20&page=${page}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
