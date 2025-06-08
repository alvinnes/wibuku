import axios from "axios";

export const searchAnime = async (
  page: number,
  id: string | undefined,
  name: string | undefined,
) => {
  try {
    const dataAnime = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${name}&order_by=end_date&status=airing&status=complete&page=${page}&limit=14`,
    );
    console.log(id);
    return dataAnime.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
