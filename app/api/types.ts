// Much of this metadata is not currently used, but is 
// included for potential future usecases/
// Currently, only the title and artist_display are used. 
export interface Artwork {
  id: number;
  title: string;
  artist_titles: string[];
  artwork_type_title: string;
  artist_display: string;
  date_display: string;
  dimensions: string;
  medium_display: string;
  place_of_origin: string;
}

export interface Exhibition {
  id: number;
  title: string;
  description: string;
  image_url: string;
  start_date: string;
  end_date: string;
  status: string;
  gallery_id: number;
  gallery_title: string;
  web_url: string;

  //Artwork Info
  artist_ids: number[];
  artwork_ids: number[];
  artworks: Artwork[];
}