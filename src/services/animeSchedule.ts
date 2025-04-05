import axios, { AxiosResponse } from "axios";
import { DetailDataAnime } from "../interfaces/api/IDetailDataAnime";

export const schedulAnime = async (day: string | undefined) => {
  try {
    const response: AxiosResponse<{ data: DetailDataAnime[] }> =
      await axios.get(`https://api.jikan.moe/v4/schedules?filter=${day}`);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return []
  }
};
