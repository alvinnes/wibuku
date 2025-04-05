import axios from "axios";
export const dataAnimePopular = async (page: number) => {
    
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/anime?filter=bypopularity&type=tv&page=${page}&limit=20`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
