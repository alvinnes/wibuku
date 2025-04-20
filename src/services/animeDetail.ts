import axios from "axios";

export const fetchDetailAnime = async (id: string | undefined) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const episodeAnime = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime/${id}/episodes`,
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const recomendationAnimes = async () => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?type=tv&min_score=9&limit=4`,
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
