import axios from "axios";

export const searchAnime = async (name: string | undefined, page: number) => {
  try {
    const dataAnime = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${name}&order_by=popularity&status=airing&status=complete&page=${page}&limit=15`,
    );
    return dataAnime.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
