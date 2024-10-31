
export interface ICountryData {
  capital?: string;
  continent?: IContinent;
  currency?: string;
  emoji?: string;
  languages?: Array<ILanguage>;
  name?: string;
  phone?: string;
}

interface ILanguage {
  name: string;
}

interface IContinent {
  name: string;
}

