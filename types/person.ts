export interface Person {
  person: {
    id: number;
    url: string;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    birthday: string;
    deathday: null | string;
    gender: string;
    image: {
      medium: string;
      original: string;
    };
    updated: number;
    _links: {
      self: {
        href: string;
      };
    };
  };
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: string | null;
  _links: {
    self: {
      href: string;
    };
  };
}
