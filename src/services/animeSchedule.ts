import axios from "axios";
import { DetailDataAnime } from "../interfaces/IDetailDataAnime";

export const schedulAnime = async (
  page: number,
  id?: string | undefined,
  name?: string | undefined,
  day?: string | undefined,
): Promise<{ data: DetailDataAnime[]; pagination: undefined }> => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/schedules?filter=${day}`,
    );
    console.log(page, name, id);
    return { data: response.data.data, pagination: undefined };
  } catch (err) {
    console.log(err);
    return { data: [], pagination: undefined };
  }
};
