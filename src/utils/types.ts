export interface CountryResponse {
  name: {
    common: string;
  };
  cca2: string;
  capital: string[];
  region: string;
  population: number;
  timezones: string[];
  flags: {
    png: string;
    svg: string;
  };
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
}

export interface Country {
  name: string;
  code: string;
  capital: string;
  region: string;
  population: number;
  timezone: string;
  flag: string;
  currency: {
    name: string;
    symbol: string;
  };
}

export interface Filters {
  name?: string;
  capital?: string;
  region?: string;
  timezone?: string;
}

export interface CacheRecord {
  data: Country[];
  expiry: number;
}

export type cache = Record<string, CacheRecord>;
