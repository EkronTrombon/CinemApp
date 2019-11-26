export interface SearchResult {
  page?: number;
  results?: Result[];
  total_results?: number;
  total_pages?: number;
}

interface Result {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget?: number;
  genres?: Genre[];
  homepage?: any;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: Productioncompany[];
  production_countries?: Productioncountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Spokenlanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

interface Spokenlanguage {
  iso_639_1?: string;
  name?: string;
}

interface Productioncountry {
  iso_3166_1?: string;
  name?: string;
}

interface Productioncompany {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

export interface Genre {
  id?: number;
  name?: string;
}

export interface Credits {
  id?: number;
  cast?: Cast[];
  crew?: Crew[];
}

interface Crew {
  credit_id?: string;
  department?: string;
  gender?: number;
  id?: number;
  job?: string;
  name?: string;
  profile_path?: string;
}

interface Cast {
  cast_id?: number;
  character?: string;
  credit_id?: string;
  gender?: number;
  id?: number;
  name?: string;
  order?: number;
  profile_path?: string;
}

export interface CastDetail {
  birthday?: string;
  known_for_department?: string;
  deathday?: any;
  id?: number;
  name?: string;
  also_known_as?: string[];
  gender?: number;
  biography?: string;
  popularity?: number;
  place_of_birth?: string;
  profile_path?: string;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string;
}