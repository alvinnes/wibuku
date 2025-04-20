export interface DetailDataAnime {
  title: string;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  mal_id: number;
  title_japanese?: string;
  synopsis?: string;
}
