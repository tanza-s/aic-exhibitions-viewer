import { Exhibition } from "./types";

export const mapArtwork = (apiArtwork: any) => {
  return {
    id: apiArtwork.id,
    title: apiArtwork.title,
    artist_titles: apiArtwork.artist_titles,
    artwork_type_title: apiArtwork.artwork_type_title,
    artist_display: apiArtwork.artist_display,
    date_display: apiArtwork.date_display,
    dimensions: apiArtwork.dimensions,
    medium_display: apiArtwork.medium_display,
    place_of_origin: apiArtwork.place_of_origin,
  }
}

export const mapExhibition = (apiExhibition: any): Exhibition => {
  return {
    id: apiExhibition.id, 
    title: apiExhibition.title,
    description: apiExhibition.short_description,
    image_url: apiExhibition.image_url,
    start_date: new Date(apiExhibition.aic_start_at).toDateString(),
    end_date: new Date(apiExhibition.aic_end_at).toDateString(),
    status: apiExhibition.status,
    gallery_id: apiExhibition.gallery_id,
    gallery_title: apiExhibition.gallery_title,
    web_url: apiExhibition.web_url,
    artist_ids: apiExhibition.artist_ids,
    artwork_ids: apiExhibition.artwork_ids,
    artworks: apiExhibition.artworks.map(mapArtwork),
}
}
