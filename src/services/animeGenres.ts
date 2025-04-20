import axios from "axios";

export const genresAnime = async () => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/genres/anime");
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const detailGenresAnime = async (id?: string, page?: number) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?genres=${id}&type=tv&order_by=popularity&page=${page}&limit=20`,
    );
    return response.data
  } catch (err) {
    console.log(err);
    return [];
  }
};
