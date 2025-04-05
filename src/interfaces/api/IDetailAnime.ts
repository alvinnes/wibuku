export interface DetailAnime {
  title: string;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  score: number;
  year: number;
  type: string;
  synopsis: string;
  status: string;
  producers: Producers[];
  season: string;
  episodes: number;
  malId?: number;
  title_japanese?: string;
  genres: Genres[];
  favorites: string;
  rank: number;
  members: number;
  rating: string;
  duration: string;
  popularity: number;
  broadcast: Broadcast;
  studios: Studios[];
  licensors: Licensors[];
  background: string;
  aired: Aired;
}

interface Producers {
  name: string;
}

interface Genres {
  name: string;
  mal_id: number;
}

interface Broadcast {
  day: string;
}

interface Studios {
  name: string;
}

interface Licensors {
  name: string;
  url: string;
}

interface Aired {
  string: string;
}
