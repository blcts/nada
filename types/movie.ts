export interface TMovie {
  id: number;
  url: String;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: null;
  };
  image: null;
  summary: null;
  show: Show;
  _links: Links;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: null;
  officialSite: string;
  shedule: Shedule;
  rating: {
    average: null;
  };
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Shedule {
  time: string;
  days: string[];
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Externals {
  tvrage: null;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: Href;
  previousepisode?: Href;
  nextepisode?: Href;
  show?: Href;
}

export interface Href {
  href: string;
}
